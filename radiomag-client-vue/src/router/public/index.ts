import home from "./home";
import group from "./group";
import product from "./product";
import products from "./products";
import search from "./search";
import contacts from "./contacts";
import cart from "./cart";
import error404 from "./error404";
import login from "./login";
import HTTP403 from "./HTTP403";

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
  HTTP403,
];

export type RouteNamesPublic =
  | "home"
  | "group"
  | "goods"
  | "products"
  | "search"
  | "contacts"
  | "cart"
  | "404"
  | "login"
  | "403";
