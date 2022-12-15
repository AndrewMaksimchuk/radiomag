import { createI18n } from "vue-i18n";
import ua from "./dictionary/ua-UK.json";
import en from "./dictionary/en-US.json";

type MessageSchema = typeof ua;

const messages = { ua, en };

const options = {
  legacy: false,
  locale: "ua",
  fallbackLocale: "en",
  messages,
};

export const setLang = (locale: string) =>
  document.querySelector("html")?.setAttribute("lang", locale);

const setupI18n = () => {
  const i18n = createI18n<[MessageSchema], "ua" | "en">(options);
  setLang(options.locale);
  return i18n;
};

export const i18n = setupI18n();
