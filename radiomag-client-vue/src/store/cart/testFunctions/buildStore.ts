import { setActivePinia, createPinia } from "pinia";
import { useCart } from "@/store/cart";

export type UseCart = typeof useCart;

export const buildStore = () => {
  setActivePinia(createPinia());
  const store = useCart();
  store.clear();
  return store;
};
