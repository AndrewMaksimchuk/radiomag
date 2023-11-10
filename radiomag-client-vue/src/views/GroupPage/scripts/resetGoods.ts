import { useGroup } from "@/store/group";

export const resetGoods = () => {
  const store = useGroup();
  store.groupWorker?.postMessage({
    type: "reset",
  });
};
