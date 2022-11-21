import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBreadcrumbs = defineStore('breadcrumbs', () => {
    /** @type {{ name: string, path: string }[]} */
    const breadcrumbs = ref([]);
    const length = computed(() => breadcrumbs.value.length);
    const reset = () => breadcrumbs.value = [];
    const add = (value) => breadcrumbs.value.push(value);
    const update = (value) => breadcrumbs.value = value;

    return { breadcrumbs, length, reset, add, update };
});
