import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

interface AuthContextProps {
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({ isAuthenticated: false });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rawPublicKey, setRawPublicKey] = useState<ArrayBuffer | null>(null);

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

  const arrayBufferToBase64 = (buffer: any) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const fetchPublicKey = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/auth/public_key`);

      const publicKey = response.data.publicKey;
      sessionStorage.setItem("publicKey", publicKey);
      setRawPublicKey(pemToArrayBuffer(publicKey));
    } catch (error) {
      console.error("[AuthProvider] >> Error fetching public key:", error);
    }
  };

  const isPublicKeyAvailable = () => {
    const sessionStoragePublicKey = sessionStorage.getItem("publicKey");

    if (sessionStoragePublicKey && !rawPublicKey) {
      setRawPublicKey(pemToArrayBuffer(sessionStoragePublicKey));
    }

    return !!sessionStoragePublicKey;
  };

  const encryptPassword = async (password: string) => {
    const encoder = new TextEncoder();

    try {
      const cryptoKey = await window.crypto.subtle.importKey(
        "spki",
        rawPublicKey as ArrayBuffer,
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
  };

  const authenticateUser = async () => {
    const username = import.meta.env.VITE_DEVHUB_USERNAME;
    const password = import.meta.env.VITE_DEVHUB_PWD;

    if (!username || !password) {
      console.error("Username or password is missing");
      return;
    }

    if (!rawPublicKey) {
      console.error("Public key not available for encryption");
      return;
    }

    try {
      const encryptedPassword = await encryptPassword(password);
      if (!encryptedPassword) {
        console.error("Failed to encrypt password");
        return;
      }

      const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, {
        username: username,
        password: encryptedPassword,
      });

      if (response.data && response.data.token) {
        sessionStorage.setItem("authToken", response.data.token);
        setIsAuthenticated(true);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("[AuthProvider][authenticateUser] >> Exception:", error);
    }
  };

  const validateToken = async (token: string) => {
    const response = await axios
      .post(`${BASE_URL}/api/v1/auth/validate_token`, {
        token,
      })
      .catch((error) => {
        console.error("[AuthProvider][validateToken] >> Exception:", error);

        authenticateUser();
        return null;
      });

    if (response && response.status === 200) {
      setIsAuthenticated(true);
    }
  };

  //   Fetch Public Key on component mount
  useEffect(() => {
    if (!isPublicKeyAvailable()) {
      fetchPublicKey();
    }
  }, []);

  //   Initiate Login OR Token Validation once Public Key is available
  useEffect(() => {
    if (rawPublicKey) {
      const authToken = sessionStorage.getItem("authToken");
      if (authToken) {
        validateToken(authToken);
      } else {
        authenticateUser();
      }
    }
  }, [rawPublicKey]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
      }}
    >
      {isAuthenticated ? children : <LoadingSpinner />}
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
