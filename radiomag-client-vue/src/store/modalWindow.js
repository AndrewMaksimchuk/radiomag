import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalWindow = defineStore("modalWindow", () => {
    const isVisible = ref(false);
    const headerText = ref("Електронні компоненти та комплектуючі");
    const data = ref([]);

    const show = (someData) => {
        isVisible.value = true;
        data.value = someData;
    }
    const hide = () => {
        isVisible.value = false;
        data.value = [];
    }

    return { isVisible, headerText, data, show, hide }
});