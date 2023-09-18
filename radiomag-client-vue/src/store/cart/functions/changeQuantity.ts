import type { Ref } from "vue";
import type { Cart } from "$/dto/Cart";
import type { Change } from "../type";
import type { RemovableRef } from "@vueuse/core";

export const useQuantity = (
  cart: Ref<Cart>,
  localStorage: RemovableRef<Cart>
) => {
  const changeQuantity = (obj: Change) => {
    const { code, quantity } = obj;

    cart.value = cart.value.map((item) => {
      if (item.product.id === code) {
        const updatedProduct = item;
        updatedProduct.quantity = quantity;
        return updatedProduct;
      }
      return item;
    });

    localStorage.value = cart.value;
  };

  return {
    changeQuantity,
  };
};
