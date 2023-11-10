import { onBeforeUnmount } from "vue";
import { useGroup } from "@/store/group";
import { usePagination } from "@/store/pagination";

export const useOnBeforeUnmount = () => {
  const store = useGroup();
  const storePagination = usePagination();

  onBeforeUnmount(() => {
    storePagination.setDefault();
    store.terminateWorker();
  });
};
