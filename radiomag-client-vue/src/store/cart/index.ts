import type { Cart, CartItem } from "$/dto/Cart";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useTotalCost } from "./functions/totalCost";
import { useQuantity } from "./functions/changeQuantity";
import { useLoadLocalStorage } from "./functions/loadLocalStorage";

export const useCart = defineStore("cart", () => {
  const localStorage = useLocalStorage<Cart>("cart", []);
  const cart = ref<Cart>([]);

  const length = computed(() => {
    return cart.value.length;
  });

  const { totalCost } = useTotalCost(cart);

  const add = (data: CartItem) => {
    cart.value.push(data);
    localStorage.value = cart.value;
  };

  const remove = (index: number) => {
    cart.value.splice(index, 1);
    localStorage.value = cart.value;
  };

  const clear = () => {
    cart.value = [];
    localStorage.value = [];
  };

  const { changeQuantity } = useQuantity(cart, localStorage);
  const { loadLocalStorage } = useLoadLocalStorage(cart, localStorage);

  return {
    cart,
    length,
    add,
    remove,
    changeQuantity,
    loadLocalStorage,
    clear,
    totalCost,
  };
});
