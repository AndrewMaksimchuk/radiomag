import type { Ref } from "vue";
import type { Group } from "$/dto/Group";
import type { TransferObject, WorkerProduct } from "@/public/types";
import { useGroup } from "@/store/group";

export const initWorker = (
  currentGroupId: string,
  allDataToShow: Ref<WorkerProduct[]>
) => {
  const store = useGroup();

  store.createWorker();

  if (undefined === store.groupWorker) {
    return;
  }

  store.groupWorker.onmessage = (event: MessageEvent<TransferObject>) => {
    const { type, data } = event.data;
    if ("return_sum_all_product_description" === type) {
      allDataToShow.value = data;
    }
  };

  const cloneData: Group = JSON.parse(
    JSON.stringify(store.data[currentGroupId])
  );

  store.groupWorker.postMessage({
    type: "sum_all_product_description",
    data: cloneData,
  });
};
