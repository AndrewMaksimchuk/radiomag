import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { CardLineDescription } from "@/components";
import { product } from "tests/mock/mockProduct";

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

export const props = {
  product,
  filterHeaders: [],
};

export const buildWrapper = (options = {}) => {
  return shallowMount(CardLineDescription, {
    global,
    ...options,
  });
};
