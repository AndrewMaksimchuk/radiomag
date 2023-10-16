import type { WorkerProduct } from "$/dto/Product";
import { ref } from "vue";
import { defineStore } from "pinia";

export interface Goods {
  product: WorkerProduct;
  filterHeaders: string[];
}

export const useGoods = defineStore("goods", () => {
  const goods = ref<Goods>();

  const add = (value: Goods) => {
    return (goods.value = value);
  };

  return { goods, add };
});
