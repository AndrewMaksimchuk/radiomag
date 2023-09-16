import { getProtectedRoutes } from "./functions/getProtectedRoutes";
import user from "./routes/user";

export const protectedRoutes = [user];

export type RouteNamesProtected = typeof protectedRoutes[number]["name"];

export const getRouterProtectedNames = () => {
  return getProtectedRoutes(protectedRoutes);
};
