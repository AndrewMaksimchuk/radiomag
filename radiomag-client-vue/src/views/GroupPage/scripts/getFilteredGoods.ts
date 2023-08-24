import type { AllSearchParams } from "@/store/filters";
import { useGroup } from "@/store/group";

export const getFilteredGoods = (data: AllSearchParams) => {
  if (0 === Object.keys(data).length) {
    return;
  }

  const store = useGroup();

  store.groupWorker?.postMessage({
    type: "apply_filters",
    data: JSON.parse(JSON.stringify(data)),
  });
};
