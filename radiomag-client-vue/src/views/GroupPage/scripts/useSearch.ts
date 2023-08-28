import type { Ref } from "vue";
import type { WorkerProduct } from "@/public/types";
import { useToast } from "vue-toastification";
import { usePagination } from "@/store/pagination";
import { useI18nStore } from "@/store/i18n";
import { resetGoods } from "./resetGoods";

const notifyOptions = {
  timeout: 5000,
};

export const useSearch = (allDataToShow: Ref<WorkerProduct[]>) => {
  const toast = useToast();
  const store = usePagination();
  const useI18n = useI18nStore();

  const notifyWarning = () => {
    toast.warning(useI18n.t("groupSearch.notificationNotFound"), notifyOptions);
  };

  const searchShow = (data: WorkerProduct[]) => {
    if (0 === data.length) {
      notifyWarning();
      return;
    }
    allDataToShow.value = data.sort((a, b) => {
      return Number(b.total_stock || 0) - Number(a.total_stock || 0);
    });
    store.setActive(1);
  };

  const searchReset = () => {
    resetGoods();
  };

  return {
    searchShow,
    searchReset,
  };
};
