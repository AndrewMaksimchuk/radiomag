import type { Ref } from "vue";
import type { FormLogin } from "../types";
import { computed } from "vue";

export const useIsDisable = (formData: Ref<FormLogin>) => {
  const isDisable = computed(() => {
    const expr = formData.value.phone.length && formData.value.password.length;
    return expr ? false : true;
  });

  return {
    isDisable,
  };
};
