"use client";

import { useLanguage } from "@/lib/i18n/provider";
import { Button } from "@/once-ui/components";
import { supportedLanguages } from "@/lib/i18n/types";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="tertiary"
      size="s"
      onClick={() => {
        const currentIndex = supportedLanguages.indexOf(language);
        const nextIndex = (currentIndex + 1) % supportedLanguages.length;
        setLanguage(supportedLanguages[nextIndex]);
      }}
    >
      {language.toUpperCase()}
    </Button>
  );
}
