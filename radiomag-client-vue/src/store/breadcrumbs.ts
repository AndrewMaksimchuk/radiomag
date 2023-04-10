import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface BreadcrumbsItem {
  name: string;
  path: string;
}

export type Breadcrumbs = BreadcrumbsItem[];

export const useBreadcrumbs = defineStore("breadcrumbs", () => {
  const breadcrumbs = ref<Breadcrumbs>([]);

  const length = computed(() => breadcrumbs.value.length);

  const reset = () => (breadcrumbs.value = []);

  const add = (value: BreadcrumbsItem) => breadcrumbs.value.push(value);

  const findIndex = (path: string) =>
    breadcrumbs.value.findIndex((value) => value.path === path);

  const update = (index: number) => breadcrumbs.value.splice(index);

  const updateOne = (path: string, newValue: BreadcrumbsItem) => {
    const index = breadcrumbs.value.findIndex((item) => item.path === path);
    if (index === -1) return;
    breadcrumbs.value.splice(index, 1, newValue);
  };

  return { breadcrumbs, length, reset, add, update, updateOne, findIndex };
});
