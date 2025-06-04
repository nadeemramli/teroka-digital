// Define supported languages
export const supportedLanguages = ["en", "my", "cn"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number]; 