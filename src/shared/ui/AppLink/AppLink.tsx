import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export function AppLink({theme = AppLinkTheme.PRIMARY, ...props}: AppLinkProps) {
  return (
    <Link
      className={classNames(cls.appLink, {}, [props.className, cls[theme]]) }
      to={props.to}
      {...props}
    >
      {props.children}
    </Link>
  );
};