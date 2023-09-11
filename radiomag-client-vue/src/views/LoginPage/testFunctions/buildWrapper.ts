import { mount, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import LoginPage from "../LoginPage.vue";

config.global.config.warnHandler = () => {
  return null;
};

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const global = {
  plugins,
  mocks,
};

export const buildWrapper = (options = {}) => {
  return mount(LoginPage, { global, ...options });
};
