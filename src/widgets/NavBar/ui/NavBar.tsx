import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export function NavBar(props: NavBarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [props.className])}>
      <div className={cls.navbar__links}>
        <AppLink 
          to={"/"}
          theme={AppLinkTheme.SECONDARY}
        >
          MainPage
        </AppLink>
        <AppLink 
          to={"/about"}
          theme={AppLinkTheme.SECONDARY}
        >
          AboutPage
        </AppLink>
      </div>
    </div>
  );
}
