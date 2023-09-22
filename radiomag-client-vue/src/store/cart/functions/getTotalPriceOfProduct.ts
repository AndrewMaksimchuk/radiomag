import type { CartItem } from "$/dto/Cart";

export function getTotalPriceOfProduct(prod: CartItem) {
  const { quantity, product } = prod;
  if (0 === product.prices.length) {
    return 0;
  }

  const prices = [...product.prices].reverse().filter((value) => {
    return quantity >= value.q;
  });

  if (prices.length) {
    return quantity * prices[0].p;
  }

  return quantity * product.prices[0].p;
}
