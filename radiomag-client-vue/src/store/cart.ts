import type { WorkerProduct } from "@/public/types";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export interface CartItem {
  product: WorkerProduct;
  quantity: number;
}

export type Cart = CartItem[];

interface Change {
  code: number;
  quantity: number;
}

const localStorage = useLocalStorage<Cart>("cart", []);

export const useCart = defineStore("cart", () => {
  const cart = ref<Cart>([]);

  const length = computed(() => cart.value.length);

  const add = (data: CartItem) => {
    cart.value.push(data);
    localStorage.value = cart.value;
  };

  const remove = (index: number) => {
    cart.value.splice(index, 1);
    localStorage.value = cart.value;
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
    localStorage.value = cart.value;
  };

  const loadLocalStorage = () => {
    const storage = localStorage.value;
    cart.value = storage;
  };

  const clear = () => {
    cart.value = [];
    localStorage.value = [];
  };

  function getTotalPriceOfProduct(prod: CartItem) {
    const { quantity, product } = prod;
    if (product.prices.length === 0) return 0;

    const priceObject = [...product.prices]
      .reverse()
      .filter((value) => quantity >= value.q)[0];
    return quantity * priceObject.p;
  }

  const totalCost = computed(() => {
    const totalCostValue = cart.value.reduce(
      (acc, curr) => acc + getTotalPriceOfProduct(curr),
      0
    );
    return totalCostValue.toFixed(2);
  });

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
