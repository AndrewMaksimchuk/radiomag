import type { WorkerProduct } from "@/public/types";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface CartItem {
  product: WorkerProduct;
  quantity: number;
}

export type Cart = CartItem[];

interface Change {
  code: number;
  quantity: number;
}

export const useCart = defineStore("cart", () => {
  const cart = ref<Cart>([]);

  const length = computed(() => cart.value.length);

  const add = (data: CartItem) => {
    cart.value.push(data);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const remove = (index: number) => {
    cart.value.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

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
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const loadLocalStorage = () => {
    const storage = localStorage.getItem("cart");
    if (storage) {
      const data = JSON.parse(storage);
      data.length && (cart.value = data);
    }
  };

  const clear = () => {
    cart.value = [];
    localStorage.removeItem("cart");
  };

  return { cart, length, add, remove, changeQuantity, loadLocalStorage, clear };
});
