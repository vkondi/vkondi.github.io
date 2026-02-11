const THEME_STORAGE_KEY = "vkondi.github.io_theme";

export type ThemeMode = "light" | "dark";

/**
 * Get the user's system theme preference
 */
export const getSystemThemePreference = (): ThemeMode => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

/**
 * Get the saved theme preference from localStorage
 */
export const getSavedThemePreference = (): ThemeMode | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return null;
  } catch (error) {
    console.error("[ThemeContext] Error reading from localStorage:", error);
    return null;
  }
};

/**
 * Save the theme preference to localStorage
 */
export const saveThemePreference = (theme: ThemeMode): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error("[ThemeContext] Error writing to localStorage:", error);
  }
};

/**
 * Get the initial theme preference
 * Priority: localStorage > system preference > default (light)
 */
export const getInitialTheme = (): ThemeMode => {
  const saved = getSavedThemePreference();
  if (saved) {
    return saved;
  }
  return getSystemThemePreference();
};
