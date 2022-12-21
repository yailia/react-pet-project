import { ReactNode, useMemo, useState } from "react";
import { LS_THEME_KEY, ETheme, ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";

interface IThemeContextProviderProps {
  children: ReactNode;
}

export default function ThemeContextProvider(props: IThemeContextProviderProps) {

  const defaultTheme = localStorage.getItem(LS_THEME_KEY) as ETheme || ETheme.LIGHT;

  const [theme, setTheme] = useState<ETheme>(defaultTheme);
  
  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  );
}
