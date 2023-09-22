import { useToast } from "vue-toastification";
import { useI18nStore } from "@/store/i18n";

const notifyOptions = {
  timeout: 5000,
};

export const useNotify = () => {
  const useI18n = useI18nStore();
  const toast = useToast();

  const notifySuccess = () => {
    toast.success(useI18n.t("orderContactForm.notify.success"), notifyOptions);
  };

  const notifyError = () => {
    toast.error(useI18n.t("orderContactForm.notify.error"), notifyOptions);
  };

  const notifyWarning = () => {
    toast.warning(useI18n.t("orderContactForm.notify.warning"), notifyOptions);
  };

  return {
    notifySuccess,
    notifyError,
    notifyWarning,
  };
};
