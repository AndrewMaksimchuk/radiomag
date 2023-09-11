import { useToast } from "vue-toastification";

const options = {
  timeout: 5000,
};
const toast = useToast();

export const toastWarning = (text: string) => {
  return toast.warning(text, options);
};

export const toastError = (text: string) => {
  return toast.error(text, options);
};
