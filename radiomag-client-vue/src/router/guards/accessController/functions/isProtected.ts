import type { RouteLocationNormalized } from "vue-router";
import { routerProtectedNames } from "@/router/protected";

export const isProtected = (name: RouteLocationNormalized["name"]) => {
  return routerProtectedNames.includes(name);
};
