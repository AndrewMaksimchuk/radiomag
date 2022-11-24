import { ref } from 'vue';
import { defineStore } from 'pinia';

type F = <T extends (...args: any) => any> (func: T) => Promise<ReturnType<T>>


export const useHTTPclient = defineStore('HTTPclient', () => {
    const isLoading = ref(false);

    const startLoading = () => isLoading.value = true;

    const endLoading = () => isLoading.value = false;

    const loading: F = async (func) => {
        startLoading();
        const data = await func();
        endLoading();
        return data;
    }

    return { isLoading, loading };
});
