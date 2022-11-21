import { ref } from "vue";
import { defineStore } from "pinia";

export const useGoods = defineStore('goods', () => {
    const goods = ref({});

    const add = (value) => goods.value = value;

    return { goods, add };
});
