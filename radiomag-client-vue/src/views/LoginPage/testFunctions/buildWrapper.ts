import { mount } from "@vue/test-utils";
import LoginPage from "../LoginPage.vue";

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const global = {
  mocks,
};

export const buildWrapper = (options = {}) => {
  return mount(LoginPage, { global, ...options });
};
