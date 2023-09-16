import user from "./routes/user";

export const protectedRoutes = [user];

export type RouteNamesProtected = typeof protectedRoutes[number]["name"];

export { routerProtectedNames } from "./functions/protectedNames";
