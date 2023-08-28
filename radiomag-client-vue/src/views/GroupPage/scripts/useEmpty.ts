import type { ComputedRef } from "vue";
import { computed } from "vue";

export const useEmpty = (allDataToShowLength: ComputedRef<number>) => {
  const isEmpty = computed(() => {
    return 0 === allDataToShowLength.value;
  });

  return { isEmpty };
};
