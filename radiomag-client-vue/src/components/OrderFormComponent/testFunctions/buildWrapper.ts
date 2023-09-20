import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { OrderForm } from "@/components/OrderFormComponent";

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const stubs = {
  RouterLink: RouterLinkStub,
};

const global = {
  plugins: [createTestingPinia()],
  mocks,
  stubs,
};

export const buildWrapper = (options = {}) => {
  return shallowMount(OrderForm, { global, ...options });
};
