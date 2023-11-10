import type { RouteLocationNormalized } from "vue-router";

export const isEmptyName = (name: RouteLocationNormalized["name"]) => {
  return null === name || undefined === name ? true : false;
};
