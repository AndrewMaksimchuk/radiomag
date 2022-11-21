import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useHTTPclient = defineStore('HTTPclient', () => {
    const isLoading = ref(false);

    const startLoading = () => isLoading.value = true;
    const endLoading = () => isLoading.value = false;
    const loading = async (func = () => {}) => {
        startLoading();
        const data = await func();
        endLoading();
        return data;
    }

    return { isLoading, loading };
});
