import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCart = defineStore("cart", () => {
  const cart = ref([]);

  const length = computed(() => cart.value.length);

  const add = (data) => {
    cart.value.push(data);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const remove = (index) => {
    cart.value.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const changeValue = (item) => {
    if (item.product.id === code) {
      const updatedProduct = item;
      updatedProduct.quantity = quantity;
      return updatedProduct;
    }
    return item;
  }

  const changeQuantity = (obj) => {
    const { code, quantity } = obj;
    cart.value = cart.value.map(changeValue);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

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
