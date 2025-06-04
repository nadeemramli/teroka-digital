import { useLanguage } from "@/lib/i18n/provider";
import { Button } from "@/once-ui/components";
import styles from "./LanguageSwitcher.module.scss";

const languageNames = {
  en: "English",
  my: "Bahasa Malaysia",
  cn: "中文",
} as const;

export function LanguageSwitcher() {
  const { language, setLanguage, supportedLanguages } = useLanguage();

  return (
    <div className={styles.languageSwitcher}>
      {supportedLanguages.map((lang) => (
        <Button
          key={lang}
          variant={language === lang ? "primary" : "secondary"}
          size="s"
          onClick={() => setLanguage(lang)}
          className={styles.languageButton}
          aria-label={`Switch to ${languageNames[lang]}`}
          aria-pressed={language === lang}
        >
          {languageNames[lang]}
        </Button>
      ))}
    </div>
  );
}
