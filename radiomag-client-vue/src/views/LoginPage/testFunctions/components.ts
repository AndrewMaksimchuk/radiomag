import type { VueWrapper } from "@vue/test-utils";
import { ElFormItem, ElInput, ElButton } from "element-plus";

export const findComponentsFormItem = (wrapper: VueWrapper) => {
  return wrapper.findAllComponents(ElFormItem);
};

export const findComponentsInput = (wrapper: VueWrapper) => {
  return wrapper.findAllComponents(ElInput);
};

export const findComponentButtonSubmit = (wrapper: VueWrapper) => {
  return wrapper.findComponent(ElButton);
};
