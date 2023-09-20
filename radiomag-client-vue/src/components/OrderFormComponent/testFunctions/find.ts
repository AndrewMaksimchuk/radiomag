import type { VueWrapper } from "@vue/test-utils";

export const findCost = (wrapper: VueWrapper) => {
  return wrapper.find("p.order-form__total-cost");
};

export const findButtons = (wrapper: VueWrapper) => {
  return wrapper.findAll("button.order-form__button");
};

export const getButtonClear = (wrapper: VueWrapper) => {
  return findButtons(wrapper)[0];
};

export const getButtonContinue = (wrapper: VueWrapper) => {
  return findButtons(wrapper)[1];
};

export const getButtonOrder = (wrapper: VueWrapper) => {
  return findButtons(wrapper)[2];
};
