import cls from "./ThemeSwitcher.module.scss";
import { ETheme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { EThemeButton } from "shared/ui/Button/Button";
import { Button } from "shared/ui";


interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const {theme, toggleTheme} = useTheme();
  return (
    <Button
      theme={EThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [props.className] )}
      onClick={toggleTheme}
    > {
        theme === ETheme.DARK ? <DarkIcon /> : <LightIcon />
      }
    </Button>

  );
}