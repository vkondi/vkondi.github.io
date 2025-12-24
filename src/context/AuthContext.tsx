import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import axios, { type AxiosResponse } from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
/* eslint-disable react-refresh/only-export-components */

// Helpers moved to module scope so they are stable for hooks' dependency lists
const pemToArrayBuffer = (pem: string) => {
  // Remove header/footer and line breaks
  const b64 = pem
    .replace(/-----BEGIN PUBLIC KEY-----/, "")
    .replace(/-----END PUBLIC KEY-----/, "")
    .replace(/\s+/g, "");

  const binary = window.atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
};

const arrayBufferToBase64 = (buffer: ArrayBuffer | ArrayBufferView) => {
  let binary = "";
  const bytes = new Uint8Array(buffer as ArrayBuffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

interface AuthContextProps {
  isAuthenticated?: boolean;
}

const AuthContext = createContext<AuthContextProps>({ isAuthenticated: false });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>();
  const [rawPublicKey, setRawPublicKey] = useState<ArrayBuffer | null>(null);

  const fetchPublicKey = useCallback(async () => {
    try {
      const response = await axios.get<{ publicKey: string }>(`${BASE_URL}/api/v1/auth/public_key`);
      const publicKey = response.data.publicKey;

      if (!publicKey) {
        throw new Error("Public key not found in response");
      }

      sessionStorage.setItem("publicKey", publicKey);
      setRawPublicKey(pemToArrayBuffer(publicKey));
    } catch (error) {
      console.error("[AuthProvider] >> Error fetching public key:", error);
      setIsAuthenticated(false);
    }
  }, [BASE_URL]);

  const isPublicKeyAvailable = useCallback(() => {
    const sessionStoragePublicKey = sessionStorage.getItem("publicKey");

    if (sessionStoragePublicKey && !rawPublicKey) {
      setRawPublicKey(pemToArrayBuffer(sessionStoragePublicKey));
    }

    return !!sessionStoragePublicKey;
  }, [rawPublicKey]);

  const encryptPassword = useCallback(async (password: string) => {
    const encoder = new TextEncoder();

    try {
      const cryptoKey = await window.crypto.subtle.importKey(
        "spki",
        rawPublicKey!,
        {
          name: "RSA-OAEP",
          hash: "SHA-256",
        },
        true,
        ["encrypt"]
      );

      const encodedPassword = encoder.encode(password);
      const encryptedPasswordBuffer = await window.crypto.subtle.encrypt(
        {
          name: "RSA-OAEP",
        },
        cryptoKey,
        encodedPassword
      );
      const encryptedPassword = arrayBufferToBase64(encryptedPasswordBuffer);

      return encryptedPassword;
    } catch (error) {
      console.error("[AuthContext][encryptPassword] >> Exception:", error);
      return;
    }
  }, [rawPublicKey]);

  const authenticateUser = useCallback(async () => {
    const username = import.meta.env.VITE_DEVHUB_USERNAME as string;
    const password = import.meta.env.VITE_DEVHUB_PWD as string;

    try {
      if (!username || !password) {
        console.error("Username or password is missing");
        throw new Error("Username or password is missing");
      }

      if (!rawPublicKey) {
        console.error("Public key not available for encryption");
        throw new Error("Public key not available for encryption");
      }

      const encryptedPassword = await encryptPassword(password);
      if (!encryptedPassword) {
        console.error("Failed to encrypt password");
        throw new Error("Failed to encrypt password");
      }

      const response = await axios.post<{ token: string }>(`${BASE_URL}/api/v1/auth/login`, {
        username: username,
        password: encryptedPassword,
      });

      if (response.data?.token) {
        sessionStorage.setItem("authToken", response.data.token);
        setIsAuthenticated(true);
      } else {
        console.error("Authentication failed");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("[AuthProvider][authenticateUser] >> Exception:", error);
      setIsAuthenticated(false);
    }
  }, [BASE_URL, encryptPassword, rawPublicKey]);

  const validateToken = useCallback(async (token: string) => {
    try {
      const response: AxiosResponse<void> = await axios.post(`${BASE_URL}/api/v1/auth/validate_token`, {
        token,
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("[AuthProvider][validateToken] >> Exception:", error);
      // Retry authentication on validation failure
      void (async () => {
        try {
          await authenticateUser();
        } catch (authError) {
          console.error("[AuthProvider][validateToken] >> Authentication retry failed:", authError);
        }
      })();
    }
  }, [BASE_URL, authenticateUser]);

  // Fetch Public Key on component mount
  useEffect(() => {
    if (!isPublicKeyAvailable()) {
      fetchPublicKey();
    }
  }, [fetchPublicKey, isPublicKeyAvailable]);

  // Initiate Login OR Token Validation once Public Key is available
  useEffect(() => {
    void (async () => {
      if (rawPublicKey) {
        const authToken = sessionStorage.getItem("authToken");
        if (authToken) {
          await validateToken(authToken);
        } else {
          await authenticateUser();
        }
      }
    })();
  }, [rawPublicKey, validateToken, authenticateUser]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
      }}
    >
      {typeof isAuthenticated === "boolean" ? children : <LoadingSpinner />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
