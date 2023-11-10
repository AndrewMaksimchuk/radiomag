import type { OrdersStoreI18nKeys } from "../languages";
import { useToast } from "vue-toastification";
import { useI18nStore } from "@/store/i18n";

const notifyOptions = {
  timeout: 5000,
};

export const useNotification = () => {
  const useI18n = useI18nStore();
  const toast = useToast();

  const notifyError = (text: OrdersStoreI18nKeys) => {
    return toast.error(useI18n.t(text), notifyOptions);
  };

  return {
    notifyError,
  };
};
