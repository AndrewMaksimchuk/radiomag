import { shallowMount, MountingOptions } from "@vue/test-utils";
import Cart from "@/views/CartPage/CartPage.vue";

export const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  return shallowMount(Cart, options);
};
