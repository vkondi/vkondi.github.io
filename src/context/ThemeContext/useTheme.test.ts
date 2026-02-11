import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider } from "./ThemeContext";
import useTheme from "./useTheme";

describe("useTheme hook", () => {
  it("throws error when used outside ThemeProvider", () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = () => {};

    expect(() => {
      renderHook(() => useTheme());
    }).toThrow("useTheme must be used within a ThemeProvider");

    console.error = originalError;
  });

  it("returns theme context when used within ThemeProvider", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current).toHaveProperty("isDarkMode");
    expect(result.current).toHaveProperty("themeMode");
    expect(result.current).toHaveProperty("toggleTheme");
    expect(result.current).toHaveProperty("setTheme");
    expect(typeof result.current.toggleTheme).toBe("function");
    expect(typeof result.current.setTheme).toBe("function");
  });
});
