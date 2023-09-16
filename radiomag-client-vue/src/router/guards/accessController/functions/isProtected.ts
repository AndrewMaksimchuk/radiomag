import type { RouteLocationNormalized } from "vue-router";
import { getRouterProtectedNames } from "@/router/protected";

export const isProtected = (name: RouteLocationNormalized["name"]) => {
  return getRouterProtectedNames().includes(name);
};
