import type { WorkerProduct } from "@/public/types";
import type { Ref } from "vue";
import { computed } from "vue";

export const useDataLength = (allDataToShow: Ref<WorkerProduct[]>) => {
  const allDataToShowLength = computed(() => {
    return allDataToShow.value.length;
  });

  return { allDataToShowLength };
};
