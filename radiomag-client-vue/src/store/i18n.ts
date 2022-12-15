import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { setLang } from "@/languages";

export const useI18nStore = defineStore("i18n", () => {
  const i18n = useI18n();

  const setLocale = (value: string) => {
    if (i18n.availableLocales.includes(value)) {
      i18n.locale.value = value;
      setLang(value);
    }
  };

  return {
    availableLocales: i18n.availableLocales,
    locale: i18n.locale,
    setLocale,
    t: i18n.t,
  };
});
