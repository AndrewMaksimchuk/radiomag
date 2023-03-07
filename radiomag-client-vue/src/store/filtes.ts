import type { AllSearchParams, SearchParams, ApplyTarget } from "./filters";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useFilters = defineStore("filters", () => {
  const allSearchParams = ref<AllSearchParams>({});
  const resetAll = ref(false);

  const setSearchParams = (params: SearchParams) => {
    if (Boolean(allSearchParams.value[params.filterIndex]) === false) {
      return (allSearchParams.value[params.filterIndex] = [
        params.filterItemValue,
      ]);
    }

    const ind = allSearchParams.value[params.filterIndex].indexOf(
      params.filterItemValue
    );

    if (ind > -1) {
      const tmp = allSearchParams.value[params.filterIndex].filter(
        (_, index) => index != ind
      );
      return (allSearchParams.value[params.filterIndex] = tmp);
    }

    return allSearchParams.value[params.filterIndex].push(
      params.filterItemValue
    );
  };

  const reset = () => {
    resetAll.value = true;
    allSearchParams.value = {};
    setTimeout(() => (resetAll.value = false), 1000);
  };

  const apply = (target: ApplyTarget) => target(allSearchParams.value);

  return { allSearchParams, resetAll, setSearchParams, reset, apply };
});
