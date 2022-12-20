import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { EThemeButton } from "shared/ui/Button/Button";
import cls from "./LangSwicher.module.scss";

interface LangSwicherProps {
  className?: string;
}

export function LangSwicher(props: LangSwicherProps) {
  const { t, i18n } = useTranslation();
  function toggle() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }
  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [props.className])}
      onClick={toggle}
      theme={EThemeButton.CLEAR}
    >
      {t("Перевод")}
    </Button>
  );
};