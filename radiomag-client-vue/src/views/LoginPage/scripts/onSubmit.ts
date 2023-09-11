import type { Ref } from "vue";
import type { FormInstance } from "element-plus";
import type { UserRegistration } from "$/dto/User";
import { useRouter } from "vue-router";
import { POST } from "@/httpClient";
import { toastError, toastWarning } from "./notifications";
import { useUser } from "@/store/user";

export const useOnSubmit = (formData: Ref<UserRegistration>) => {
  const router = useRouter();
  const userStore = useUser();

  const onSubmit = (formRef: FormInstance) => {
    formRef.validate(async (isValid: boolean) => {
      if (false === isValid) {
        return toastWarning("Invalid form");
      }

      const res = await POST.login(formData.value);

      if (undefined === res) {
        return toastError("Error in response");
      }

      if ("ok" in res) {
        const message =
          false === res.ok && res.message ? res.message : "Invalid";
        return toastWarning(message);
      }

      userStore.set(res);
      router.push("user");
    });
  };

  return { onSubmit };
};
