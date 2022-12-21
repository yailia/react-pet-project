import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { AppRouter } from "./providers/Router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";

export function App () {
  const { theme } = useTheme();
  
  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}
