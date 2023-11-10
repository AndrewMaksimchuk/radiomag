import { vi } from "vitest";
import { mount, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { UserOrders } from "..";
import { ordersStore } from "./mockOrdersStore";
config.global.config.warnHandler = () => {
  return null;
};

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => {
    return text;
  },
  showDetails: vi.fn(),
  ordersStore,
};

const global = {
  plugins,
  mocks,
};

export const buildWrapper = (options = {}) => {
  return mount(UserOrders, { global, ...options });
};

export type BuildWrapper = ReturnType<typeof buildWrapper>;
