// Mock axios
import { vi } from "vitest";
vi.mock("axios");

import { render, screen, waitFor } from "@testing-library/react";
import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  type MockedFunction,
} from "vitest";
import { AuthProvider, useAuth } from "./AuthContext";
import axios from "axios";

const mockGet = axios.get as MockedFunction<typeof axios.get>;
const mockPost = axios.post as MockedFunction<typeof axios.post>;

// Mock crypto
const mockCrypto = {
  subtle: {
    importKey: vi.fn(),
    encrypt: vi.fn(),
  },
};
Object.defineProperty(window, "crypto", {
  value: mockCrypto,
});

// Mock TextEncoder
class MockTextEncoder {
  encode(s: string) {
    return new Uint8Array(s.length);
  }
}
Object.defineProperty(window, "TextEncoder", {
  value: MockTextEncoder,
});

// Mock sessionStorage
const sessionStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock,
});

// Mock atob/btoa
window.atob = vi.fn((s: string) => s);
window.btoa = vi.fn((s: string) => s);

const TestComponent = () => {
  const { isAuthenticated } = useAuth();
  return <div>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</div>;
};

describe("AuthContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    vi.stubEnv("VITE_DEVHUB_USERNAME", "testuser");
    vi.stubEnv("VITE_DEVHUB_PWD", "testpass");
    vi.stubEnv("VITE_BASE_URL", "http://localhost");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("authenticates user successfully with new public key", async () => {
    mockGet.mockResolvedValueOnce({
      data: {
        publicKey:
          "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n-----END PUBLIC KEY-----",
      },
    });
    mockPost.mockResolvedValueOnce({
      data: { token: "fake-token" },
    });

    mockCrypto.subtle.importKey.mockResolvedValueOnce({});
    mockCrypto.subtle.encrypt.mockResolvedValueOnce(new ArrayBuffer(8));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Authenticated")).toBeInTheDocument();
    });

    expect(sessionStorage.getItem("authToken")).toBe("fake-token");
    expect(mockGet).toHaveBeenCalled();
    expect(mockPost).toHaveBeenCalled();
  });

  it("validates existing token", async () => {
    sessionStorage.setItem(
      "publicKey",
      "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n-----END PUBLIC KEY-----",
    );
    sessionStorage.setItem("authToken", "existing-token");

    mockPost.mockResolvedValueOnce({ status: 200 });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Authenticated")).toBeInTheDocument();
    });

    expect(mockPost).toHaveBeenCalledWith(
      expect.stringContaining("validate_token"),
      { token: "existing-token" },
    );
  });

  it("handles authentication failure", async () => {
    mockGet.mockResolvedValueOnce({
      data: { publicKey: "key" },
    });
    mockPost.mockRejectedValueOnce(new Error("Login failed"));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Not Authenticated")).toBeInTheDocument();
    });
  });
});
