import { ui, defaultLang } from "./ui";

type FlatKeys<T, P extends string = ""> = {
  [K in keyof T & string]: T[K] extends string
    ? `${P}${K}`
    : FlatKeys<T[K], `${P}${K}.`>;
}[keyof T & string];

export type UIKeys = FlatKeys<(typeof ui)[typeof defaultLang]>;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UIKeys) {
    const keys = key.split(".");
    let translation: any = ui[lang];
    let fallback: any = ui[defaultLang];

    for (const k of keys) {
      translation = translation?.[k];
      fallback = fallback?.[k];
    }

    return translation || fallback || key;
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path.startsWith("/") ? path : "/" + path}`;
  };
}
