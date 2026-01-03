// Mock axios
import { vi, beforeEach, afterEach } from "vitest";
vi.mock("axios");

import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { createElement } from "react";
import { AuthProvider, useAuth } from "./index";
import axios from "axios";

const mockGet = axios.get as unknown as ReturnType<typeof vi.fn>;
const mockPost = axios.post as unknown as ReturnType<typeof vi.fn>;

describe("useAuth", () => {
  // Store original console.error
  const originalConsoleError = console.error;

  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    vi.stubEnv("VITE_DEVHUB_USERNAME", "testuser");
    vi.stubEnv("VITE_DEVHUB_PWD", "testpass");
    vi.stubEnv("VITE_BASE_URL", "http://localhost");
    // Suppress console.error to reduce test output noise
    console.error = vi.fn();

    // Mock successful authentication by default
    mockGet.mockResolvedValue({
      data: {
        publicKey:
          "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n-----END PUBLIC KEY-----",
      },
    });
    mockPost.mockResolvedValue({
      data: { token: "test-token" },
    });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    // Restore console.error
    console.error = originalConsoleError;
  });

  it("should return context when used within AuthProvider", async () => {
    const wrapper = ({ children }: { children: ReactNode }) =>
      createElement(AuthProvider, null, children);

    const { result } = renderHook(() => useAuth(), { wrapper });

    // Wait for auth to complete
    await waitFor(() => {
      expect(result.current.isAuthenticated).toBeDefined();
    });

    // The hook should return the context object
    expect(result.current).toHaveProperty("isAuthenticated");
  });
});
