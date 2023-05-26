import type { Locale } from "./locales";
import { createI18n } from "vue-i18n";
import messages from "./dictionary";

type MessageSchema = typeof messages.ua;

const options = {
  legacy: false,
  locale: "ua",
  fallbackLocale: "en",
  messages,
};

export const setLang = (locale: string) =>
  document.querySelector("html")?.setAttribute("lang", locale);

const setupI18n = () => {
  const i18n = createI18n<[MessageSchema], Locale>(options);
  setLang(options.locale);
  return i18n;
};

export const i18n = setupI18n();
