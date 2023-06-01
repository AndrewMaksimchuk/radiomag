import type { RouteLocationNormalized } from "vue-router";
import { useI18nStore } from "@/store/i18n";
import { useBreadcrumbs } from "@/store/breadcrumbs";

export default <T extends RouteLocationNormalized>(to: T, from: T) => {
  const store = useBreadcrumbs();

  if (from.path === to.path) return;
  if (to.meta.breadcrumbs === undefined) return store.reset();

  const isPathExist = store.breadcrumbs
    .map((value) => value.path)
    .findIndex((value) => value === to.path);

  if (isPathExist > -1) {
    return store.breadcrumbs.splice(isPathExist + 1);
  }

  const i18nStore = useI18nStore();

  store.add({
    name: i18nStore.t(to.meta?.breadcrumbs.name),
    path: to.path,
  });
};
