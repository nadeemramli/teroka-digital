import { SupportedLanguage } from "./types";

// Define the shape of our translations
export interface Translations {
  [key: string]: any;
}

// Load translations based on language
export async function loadTranslations(
  lang: SupportedLanguage
): Promise<Translations> {
  try {
    const translations = await import(`./translations/${lang}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    return {};
  }
} 