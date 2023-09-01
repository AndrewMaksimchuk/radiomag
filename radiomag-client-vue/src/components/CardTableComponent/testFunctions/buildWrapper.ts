import { shallowMount, MountingOptions, RouterLinkStub } from "@vue/test-utils";
import CardTable from "../CardTableComponent.vue";
import product from "@/../tests/mock/workerProduct.json";

const props = {
  product,
  filterHeaders: ["filter header"],
};

const stubs = {
  RouterLink: RouterLinkStub,
};

const global = {
  stubs,
};

export const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  return shallowMount(CardTable, {
    global,
    props,
    ...options,
  });
};
