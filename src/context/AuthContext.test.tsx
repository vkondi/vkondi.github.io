import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AuthProvider, useAuth } from "./AuthContext";
import axios from "axios";

// Mock axios
vi.mock("axios");
const mockedAxios = vi.mocked(axios);

// Mock crypto
const mockCrypto = {
    subtle: {
        importKey: vi.fn(),
        encrypt: vi.fn(),
    },
};
Object.defineProperty(window, 'crypto', {
    value: mockCrypto,
});

// Mock TextEncoder
class MockTextEncoder {
    encode(s: string) {
        return new Uint8Array(s.length);
    }
}
Object.defineProperty(window, 'TextEncoder', {
    value: MockTextEncoder,
});

// Mock sessionStorage
const sessionStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value; },
        clear: () => { store = {}; },
        removeItem: (key: string) => { delete store[key]; },
    };
})();
Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
});

// Mock atob/btoa
window.atob = vi.fn((s: string) => s);
window.btoa = vi.fn((s: string) => s);

const TestComponent = () => {
    const { isAuthenticated } = useAuth();
    return <div data-testid="auth-status">{isAuthenticated ? "Authenticated" : "Not Authenticated"}</div>;
};

describe("AuthContext", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        sessionStorage.clear();
    });

    it("authenticates user successfully with new public key", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { publicKey: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n-----END PUBLIC KEY-----" } });
        mockedAxios.post.mockResolvedValueOnce({ data: { token: "fake-token" } });

        mockCrypto.subtle.importKey.mockResolvedValueOnce({});
        mockCrypto.subtle.encrypt.mockResolvedValueOnce(new ArrayBuffer(8));

        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("auth-status")).toHaveTextContent("Authenticated");
        });

        expect(sessionStorage.getItem("authToken")).toBe("fake-token");
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(mockedAxios.post).toHaveBeenCalled();
    });

    it("validates existing token", async () => {
        sessionStorage.setItem("publicKey", "existing-key");
        sessionStorage.setItem("authToken", "existing-token");

        mockedAxios.post.mockResolvedValueOnce({ status: 200 });

        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("auth-status")).toHaveTextContent("Authenticated");
        });

        expect(mockedAxios.post).toHaveBeenCalledWith(expect.stringContaining("validate_token"), { token: "existing-token" });
    });

    it("handles authentication failure", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { publicKey: "key" } });
        mockedAxios.post.mockRejectedValueOnce(new Error("Login failed"));

        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("auth-status")).toHaveTextContent("Not Authenticated");
        });
    });
});
