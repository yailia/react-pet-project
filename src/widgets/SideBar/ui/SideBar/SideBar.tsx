import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwicher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export function SideBar(props: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  function onToggle() {
    setCollapsed(prev => !prev)
  }
  return (
    <div 
      className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [props.className])}>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwicher className={cls.langSwitcher} />
        </div>
        <button onClick={onToggle}>TOGGLE</button>
    </div>
  );
};