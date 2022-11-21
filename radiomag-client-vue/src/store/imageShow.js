import { ref } from "vue";
import { defineStore } from "pinia";

export const useImageShow = defineStore('imageShow', () => {
    const isVisible = ref(false);
    const data = ref({
        src: '',
        alt: '',
    });

    const show = (someData) => {
        isVisible.value = true;
        data.value = someData;
    }
    const hide = () => {
        isVisible.value = false;
        data.value = {
            src: '',
            alt: '',
        };
    }

    return { isVisible, data, show, hide };
});
