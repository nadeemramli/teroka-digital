"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { SupportedLanguage, supportedLanguages } from "./types";
import { Translations } from "./translations";

// Define the context type
interface LanguageContextType {
  language: SupportedLanguage;
  translations: Translations;
  setLanguage: (lang: SupportedLanguage) => void;
  supportedLanguages: readonly SupportedLanguage[];
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Create a hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslations() {
  const { translations } = useLanguage();
  return (key: string, params?: Record<string, string | number>) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    if (typeof value !== "string") return key;
    if (!params) return value;
    return value.replace(/\{\{(\w+)\}\}/g, (match: string, key: string) => {
      return params[key]?.toString() || match;
    });
  };
}

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage: SupportedLanguage;
  translations: Translations;
}

export function LanguageProvider({
  children,
  initialLanguage,
  translations,
}: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Function to change language
  const setLanguage = useCallback(
    (newLang: SupportedLanguage) => {
      // Get the current path without the language prefix
      const pathWithoutLang = pathname.replace(/^\/[^\/]+/, "");
      // Navigate to the new language path
      router.push(`/${newLang}${pathWithoutLang}`);
    },
    [router, pathname]
  );

  // Create the context value
  const value = useMemo(
    () => ({
      language: initialLanguage,
      translations,
      setLanguage,
      supportedLanguages,
    }),
    [initialLanguage, setLanguage, translations]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
