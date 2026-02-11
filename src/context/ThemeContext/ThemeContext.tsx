import { useState, useCallback, useEffect, type ReactNode } from "react";
import ThemeContext from "./ThemeContextImpl";
import { getInitialTheme, saveThemePreference, type ThemeMode } from "./utils";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  const isDarkMode = themeMode === "dark";

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeMode(mode);
    saveThemePreference(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(themeMode === "dark" ? "light" : "dark");
  }, [themeMode, setTheme]);

  // Listen to system theme changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      // (if there's nothing in localStorage, respect system changes)
      const saved = localStorage.getItem("vkondi.github.io_theme");
      if (!saved) {
        setThemeMode(e.matches ? "dark" : "light");
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, themeMode, toggleTheme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
