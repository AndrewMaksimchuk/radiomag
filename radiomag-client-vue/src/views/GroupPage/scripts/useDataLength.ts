import type { WorkerProduct } from "$/dto/Product";
import type { Ref } from "vue";
import { computed } from "vue";

export const useDataLength = (allDataToShow: Ref<WorkerProduct[]>) => {
  const allDataToShowLength = computed(() => {
    return allDataToShow.value.length;
  });

  return { allDataToShowLength };
};
