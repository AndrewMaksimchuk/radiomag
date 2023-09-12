import home from "./home";
import group from "./group";
import product from "./product";
import products from "./products";
import search from "./search";
import contacts from "./contacts";
import cart from "./cart";
import error404 from "./error404";
import login from "./login";
import user from "./user";

export const publicRoutes = [
  home,
  group,
  product,
  search,
  contacts,
  products,
  cart,
  error404,
  login,
  user,
];

export type RouteNames =
  | "home"
  | "group"
  | "goods"
  | "products"
  | "search"
  | "contacts"
  | "cart"
  | "404"
  | "login"
  | "user";
