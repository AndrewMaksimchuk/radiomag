import { MountingOptions, mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { UserPage } from "@/views/UserPage";

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

export const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  return mount(UserPage, { global, ...options });
};
