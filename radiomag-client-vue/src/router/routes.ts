import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

export const routes = [...publicRoutes, ...protectedRoutes];
