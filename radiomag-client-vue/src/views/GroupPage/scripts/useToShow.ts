import type { WorkerProduct } from "@/public/types";
import type { Ref } from "vue";
import { computed } from "vue";
import { usePagination } from "@/store/pagination";

export const useToShow = (allDataToShow: Ref<WorkerProduct[]>) => {
  const storePagination = usePagination();

  const toShow = computed(() => {
    const { start, end } = storePagination.getRange;
    return allDataToShow.value.slice(start, end);
  });

  return { toShow };
};
