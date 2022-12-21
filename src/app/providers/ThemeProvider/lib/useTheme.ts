import { useContext } from "react";
import { ETheme, LS_THEME_KEY, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: ETheme;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

    
  function toggleTheme() {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LS_THEME_KEY, newTheme);
  }

  return {
    theme,
    toggleTheme
  };
}