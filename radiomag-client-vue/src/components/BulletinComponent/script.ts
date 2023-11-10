import { defineComponent, ref } from "vue";
import { useToast } from "vue-toastification";
import { POST } from "@/httpClient";
import { useI18nStore } from "@/store/i18n";

const notifyOptions = {
  timeout: 5000,
};

export default defineComponent({
  setup() {
    const email = ref("");
    const toast = useToast();
    const useI18n = useI18nStore();

    const notifySuccess = () => {
      return toast.success(useI18n.t("bulletin.notify.success"), notifyOptions);
    };

    const notifyError = () => {
      return toast.error(useI18n.t("bulletin.notify.error"), notifyOptions);
    };

    const onSubmit = async () => {
      const response = await POST.bulletin({
        email: email.value,
      });

      if (false === response?.ok) {
        return notifyError();
      }

      email.value = "";
      notifySuccess();
    };

    return { email, onSubmit };
  },
});
