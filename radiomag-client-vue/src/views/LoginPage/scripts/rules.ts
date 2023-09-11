import type { FormRules } from "element-plus";
import { ref } from "vue";
import { checkPhone } from "./checkPhone";

export const useRules = () => {
  const rules = ref<FormRules>({
    phone: [
      { validator: checkPhone, trigger: "change" },
      { min: 12, message: "min length", trigger: "blur" },
      { required: true, message: "require", trigger: "blur" },
    ],
    password: [{ required: true, message: "require", trigger: "change" }],
  });
  return { rules };
};
