import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum EThemeButton {
  CLEAR = "clear",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  children: ReactNode;
  theme?: EThemeButton;
}

export function Button({className, children, ...props}: ButtonProps) {
  return (
    <button 
      className={classNames(cls.button, {}, [className, cls[props.theme]])}
      {...props}
    >
      {children}
    </button>
  );
};