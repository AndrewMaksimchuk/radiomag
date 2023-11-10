import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import GroupSearch from "../GroupSearchComponent.vue";
import product from "@/../tests/mock/workerProduct.json";

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const props = {
  data: [product],
};

const global = {
  plugins,
  mocks,
};

const options = {
  global,
  props,
};

export const wrapper = mount(GroupSearch, options);

export const getIcon = () => {
  return wrapper.find("i.el-icon");
};

export const getInput = () => {
  return wrapper.find("input.el-input__inner");
};

export const getCounter = () => {
  return wrapper.find("span.el-input__count-inner");
};

export const getButton = () => {
  return wrapper.find("button.el-button");
};
