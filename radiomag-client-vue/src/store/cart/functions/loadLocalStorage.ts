import type { Ref } from "vue";
import type { Cart } from "$/dto/Cart";
import type { RemovableRef } from "@vueuse/core";

export const useLoadLocalStorage = (
  cart: Ref<Cart["items"]>,
  localStorage: RemovableRef<Cart["items"]>
) => {
  const loadLocalStorage = () => {
    const storage = localStorage.value;
    cart.value = storage.map((cartItem) => {
      cartItem.quantity = Number(cartItem.quantity);
      return cartItem;
    });
  };

  return {
    loadLocalStorage,
  };
};
