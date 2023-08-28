import { MountingOptions, shallowMount } from "@vue/test-utils";
import GroupPage from "@/views/GroupPage/GroupPage.vue";

export const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  return shallowMount(GroupPage, options);
};

export const groupId = 311;
