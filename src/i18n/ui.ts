import esTranslations from "./messages/es.json";
import enTranslations from "./messages/en.json";

export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "en";

export const ui = {
  es: esTranslations,
  en: enTranslations,
} as const;
