import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { setLang } from "@/languages";

export const useI18nStore = defineStore("i18n", () => {
  const route = useRoute();
  const i18n = useI18n();

  const setTitle = () => {
    document.title = i18n.t("title." + route.meta.title);
  };

  const setLocale = (value: string) => {
    if (i18n.availableLocales.includes(value)) {
      i18n.locale.value = value;
      setLang(value);
      setTitle();
    }
  };

  return {
    availableLocales: i18n.availableLocales,
    locale: i18n.locale,
    setLocale,
    t: i18n.t,
  };
});
