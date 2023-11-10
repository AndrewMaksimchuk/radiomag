import { shallowMount } from "@vue/test-utils";
import { QuantitySelectionForm } from "@/components";

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const global = {
  mocks,
};

export const props = {
  quantityOfProduct: 3,
};

export const slots = {
  default: "Default slot content",
  button: "Button slot text",
};

export const buildWrapper = (options = {}) => {
  return shallowMount(QuantitySelectionForm, {
    global,
    props,
    slots,
    ...options,
  });
};
