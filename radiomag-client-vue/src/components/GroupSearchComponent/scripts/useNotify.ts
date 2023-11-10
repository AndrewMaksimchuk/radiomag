import { useToast } from "vue-toastification";

const toast = useToast();

export const toastWarning = (text: string) => {
  toast.warning(text, {
    timeout: 5000,
  });
};
