import type { RouteRecordRaw } from "vue-router";

export const getProtectedRoutes = (protectedRoutes: RouteRecordRaw[]) => {
  return protectedRoutes.map((route) => {
    return route.name;
  });
};
