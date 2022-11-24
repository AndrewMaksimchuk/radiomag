import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface BreadcrumbsItem {
    name: string,
    path: string,
}

type Breadcrumbs = BreadcrumbsItem[];

export const useBreadcrumbs = defineStore('breadcrumbs', () => {
    const breadcrumbs = ref<Breadcrumbs>([]);
    const length = computed(() => breadcrumbs.value.length);
    const reset = () => breadcrumbs.value = [];
    const add = (value: BreadcrumbsItem) => breadcrumbs.value.push(value);
    const update = (value: Breadcrumbs) => breadcrumbs.value = value;

    return { breadcrumbs, length, reset, add, update };
});
