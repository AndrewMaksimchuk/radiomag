import type { WorkerProduct } from "@/public/types";
import { ref } from "vue";
import { defineStore } from "pinia";

export interface Goods {
  product: WorkerProduct;
  filterHeaders: string[];
}

export const useGoods = defineStore("goods", () => {
  const goods = ref<Goods>();

  const add = (value: Goods) => (goods.value = value);

  return { goods, add };
});
