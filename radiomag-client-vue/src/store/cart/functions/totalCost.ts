import type { Ref } from "vue";
import type { Cart } from "$/dto/Cart";
import { computed } from "vue";
import { getTotalPriceOfProduct } from "./getTotalPriceOfProduct";

export const useTotalCost = (cart: Ref<Cart>) => {
  const totalCost = computed(() => {
    const totalCostValue = cart.value.reduce((acc, curr) => {
      return acc + getTotalPriceOfProduct(curr);
    }, 0);
    return totalCostValue.toFixed(2);
  });

  return {
    totalCost,
  };
};
