import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  getSystemThemePreference,
  getSavedThemePreference,
  saveThemePreference,
  getInitialTheme,
} from "./utils";

describe("ThemeContext utils", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe("getSystemThemePreference", () => {
    it("returns 'dark' when system prefers dark mode", () => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation((query: string) => ({
          matches: query === "(prefers-color-scheme: dark)",
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      expect(getSystemThemePreference()).toBe("dark");
    });

    it("returns 'light' when system prefers light mode", () => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation((query: string) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      expect(getSystemThemePreference()).toBe("light");
    });

    it("returns 'light' when matchMedia is not available", () => {
      const originalMatchMedia = window.matchMedia;
      // @ts-expect-error - intentionally setting to undefined for test
      delete window.matchMedia;

      expect(getSystemThemePreference()).toBe("light");

      window.matchMedia = originalMatchMedia;
    });
  });

  describe("getSavedThemePreference", () => {
    it("returns saved theme from localStorage", () => {
      localStorage.setItem("vkondi.github.io_theme", "dark");
      expect(getSavedThemePreference()).toBe("dark");

      localStorage.setItem("vkondi.github.io_theme", "light");
      expect(getSavedThemePreference()).toBe("light");
    });

    it("returns null when no theme is saved", () => {
      expect(getSavedThemePreference()).toBe(null);
    });

    it("returns null when invalid theme value is saved", () => {
      localStorage.setItem("vkondi.github.io_theme", "invalid");
      expect(getSavedThemePreference()).toBe(null);
    });

    it("handles localStorage errors gracefully", () => {
      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      const getItemSpy = vi
        .spyOn(Storage.prototype, "getItem")
        .mockImplementation(() => {
          throw new Error("localStorage error");
        });

      expect(getSavedThemePreference()).toBe(null);
      expect(consoleErrorSpy).toHaveBeenCalled();

      getItemSpy.mockRestore();
      consoleErrorSpy.mockRestore();
    });
  });

  describe("saveThemePreference", () => {
    it("saves theme to localStorage", () => {
      saveThemePreference("dark");
      expect(localStorage.getItem("vkondi.github.io_theme")).toBe("dark");

      saveThemePreference("light");
      expect(localStorage.getItem("vkondi.github.io_theme")).toBe("light");
    });

    it("handles localStorage errors gracefully", () => {
      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      const setItemSpy = vi
        .spyOn(Storage.prototype, "setItem")
        .mockImplementation(() => {
          throw new Error("localStorage error");
        });

      saveThemePreference("dark");
      expect(consoleErrorSpy).toHaveBeenCalled();

      setItemSpy.mockRestore();
      consoleErrorSpy.mockRestore();
    });
  });

  describe("getInitialTheme", () => {
    it("returns saved theme when available", () => {
      localStorage.setItem("vkondi.github.io_theme", "dark");

      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation(() => ({
          matches: false,
          media: "",
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      expect(getInitialTheme()).toBe("dark");
    });

    it("returns system preference when no saved theme", () => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation((query: string) => ({
          matches: query === "(prefers-color-scheme: dark)",
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      expect(getInitialTheme()).toBe("dark");
    });

    it("defaults to light when no saved theme and system prefers light", () => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation(() => ({
          matches: false,
          media: "",
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      expect(getInitialTheme()).toBe("light");
    });
  });
});
