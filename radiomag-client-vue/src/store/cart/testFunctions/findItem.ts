import type { Cart } from "$/dto/Cart";
import { cartData } from "./cartData";

export const findItem = (cart: Cart) => {
  return cart.find((item) => {
    return item.product.id === cartData.product.id;
  });
};
