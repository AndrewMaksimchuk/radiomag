import type { FormInstance } from "element-plus";
import type { UserRegistration } from "$/dto/User";
import { ref } from "vue";
import { useRules } from "./rules";
import { useOnSubmit } from "./onSubmit";
import { useIsDisable } from "./isDisable";
import { parserPhone } from "./parserPhone";
import { formatterPhone } from "./formatterPhone";

export const setup = () => {
  const formRef = ref<FormInstance>();
  const formData = ref<UserRegistration>({
    phone: "",
    password: "",
    name: "",
  });

  const { rules } = useRules();
  const { onSubmit } = useOnSubmit(formData);
  const { isDisable } = useIsDisable(formData);

  return {
    formRef,
    formData,
    rules,
    onSubmit,
    parserPhone,
    formatterPhone,
    isDisable,
  };
};
