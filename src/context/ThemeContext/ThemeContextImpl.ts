import { createContext } from "react";
import type { ThemeMode } from "./utils";

export interface ThemeContextProps {
  isDarkMode: boolean;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default ThemeContext;
