import type { RouteNames } from "@/router/types";
import { getProtectedRoutes } from "./getProtectedRoutes";

export const routerProtectedNames: Array<RouteNames> = getProtectedRoutes();
