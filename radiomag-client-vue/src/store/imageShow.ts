import { ref } from "vue";
import { defineStore } from "pinia";

interface Image {
    src: string,
    alt: string,
}

export const useImageShow = defineStore('imageShow', () => {
    const isVisible = ref(false);
    const data = ref<Image>({
        src: '',
        alt: '',
    });

    const show = (someData: Image) => {
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
