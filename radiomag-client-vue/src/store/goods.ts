import { ref } from "vue";
import { defineStore } from "pinia";

interface Goods {
    product: WorkerProduct,
    filterHeaders: string[],
}

export const useGoods = defineStore('goods', () => {
    const goods = ref<Goods>();

    const add = (value: Goods) => goods.value = value;

    return { goods, add };
});
