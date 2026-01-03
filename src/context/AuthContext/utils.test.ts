import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  atobSafe,
  btoaSafe,
  pemToArrayBuffer,
  arrayBufferToBase64,
} from "./utils";

describe("utils", () => {
  describe("atobSafe", () => {
    it("should use window.atob when available", () => {
      const result = atobSafe("dGVzdA==");
      expect(result).toBeDefined();
    });

    it("should throw error when atob is not available in any environment", () => {
      const win = window as unknown as Record<string, unknown>;
      const originalAtob = win.atob;
      const originalGlobalThis = (
        globalThis as unknown as Record<string, unknown>
      ).Buffer;

      delete win.atob;
      delete (globalThis as unknown as Record<string, unknown>).Buffer;

      expect(() => atobSafe("test")).toThrow(
        "atob is not available in this environment",
      );

      // Restore
      win.atob = originalAtob;
      if (originalGlobalThis) {
        (globalThis as unknown as Record<string, unknown>).Buffer =
          originalGlobalThis;
      }
    });

    it("should use Buffer when window.atob is not available but Buffer is", () => {
      const win = window as unknown as Record<string, unknown>;
      const originalAtob = win.atob;
      delete win.atob;

      // Mock Buffer
      const mockBuffer = {
        from: vi.fn().mockReturnValue({
          toString: vi.fn().mockReturnValue("test"),
        }),
      };
      (globalThis as unknown as Record<string, unknown>).Buffer = mockBuffer;

      const result = atobSafe("dGVzdA==");
      expect(result).toBe("test");
      expect(mockBuffer.from).toHaveBeenCalledWith("dGVzdA==", "base64");

      // Restore
      win.atob = originalAtob;
      delete (globalThis as unknown as Record<string, unknown>).Buffer;
    });
  });

  describe("btoaSafe", () => {
    it("should use window.btoa when available", () => {
      const result = btoaSafe("test");
      expect(result).toBeDefined();
    });

    it("should throw error when btoa is not available in any environment", () => {
      const win = window as unknown as Record<string, unknown>;
      const originalBtoa = win.btoa;
      const originalGlobalThis = (
        globalThis as unknown as Record<string, unknown>
      ).Buffer;

      delete win.btoa;
      delete (globalThis as unknown as Record<string, unknown>).Buffer;

      expect(() => btoaSafe("test")).toThrow(
        "btoa is not available in this environment",
      );

      // Restore
      win.btoa = originalBtoa;
      if (originalGlobalThis) {
        (globalThis as unknown as Record<string, unknown>).Buffer =
          originalGlobalThis;
      }
    });

    it("should use Buffer when window.btoa is not available but Buffer is", () => {
      const win = window as unknown as Record<string, unknown>;
      const originalBtoa = win.btoa;
      delete win.btoa;

      // Mock Buffer
      const mockBuffer = {
        from: vi.fn().mockReturnValue({
          toString: vi.fn().mockReturnValue("dGVzdA=="),
        }),
      };
      (globalThis as unknown as Record<string, unknown>).Buffer = mockBuffer;

      const result = btoaSafe("test");
      expect(result).toBe("dGVzdA==");
      expect(mockBuffer.from).toHaveBeenCalledWith("test", "binary");

      // Restore
      win.btoa = originalBtoa;
      delete (globalThis as unknown as Record<string, unknown>).Buffer;
    });
  });

  describe("pemToArrayBuffer", () => {
    beforeEach(() => {
      window.atob = vi.fn((_s: string) => {
        // Simple mock that returns a short binary string
        return "\x00\x01\x02\x03";
      });
    });

    it("should convert PEM to ArrayBuffer", () => {
      const pem =
        "-----BEGIN PUBLIC KEY-----\nMIIBIjAN\n-----END PUBLIC KEY-----";
      const result = pemToArrayBuffer(pem);
      expect(result).toBeInstanceOf(ArrayBuffer);
      expect(result.byteLength).toBeGreaterThan(0);
    });

    it("should remove headers and line breaks", () => {
      const pem =
        "-----BEGIN PUBLIC KEY-----\nMIIBIjAN\n-----END PUBLIC KEY-----";
      pemToArrayBuffer(pem);
      expect(window.atob).toHaveBeenCalledWith("MIIBIjAN");
    });
  });

  describe("arrayBufferToBase64", () => {
    beforeEach(() => {
      window.btoa = vi.fn((_s: string) => {
        // Simple mock that returns base64-like string
        return "base64string";
      });
    });

    it("should convert ArrayBuffer to base64", () => {
      const buffer = new Uint8Array([1, 2, 3, 4]).buffer;
      const result = arrayBufferToBase64(buffer);
      expect(result).toBe("base64string");
      expect(window.btoa).toHaveBeenCalled();
    });

    it("should handle ArrayBufferView", () => {
      const view = new Uint8Array([1, 2, 3, 4]);
      const result = arrayBufferToBase64(view);
      expect(result).toBe("base64string");
      expect(window.btoa).toHaveBeenCalled();
    });
  });
});
