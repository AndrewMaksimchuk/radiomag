import { protectedRoutes } from "@/router/protected";

export const getProtectedRoutes = () => {
  return protectedRoutes.map((route) => {
    return route.name;
  });
};
