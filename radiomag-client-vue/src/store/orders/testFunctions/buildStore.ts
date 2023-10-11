import { setActivePinia, createPinia } from "pinia";
import { useOrders } from "..";

export const buildStore = () => {
  setActivePinia(createPinia());
  const store = useOrders();
  return store;
};

export type Store = ReturnType<typeof useOrders>;
