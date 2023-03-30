import type { RouteLocationNormalized } from "vue-router";
import { useI18nStore } from "@/store/i18n";

export const setTitle = <T extends RouteLocationNormalized>({
  meta: { title },
}: T) => {
  const i18nStore = useI18nStore();
  title ? (document.title = i18nStore.t("title." + title)) : undefined;
};
