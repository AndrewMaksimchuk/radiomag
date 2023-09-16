import type { VueWrapper } from "@vue/test-utils";
import { ElButton, ElTabPane } from "element-plus";
import { UserOrders } from "@/components";

export const findName = (wrapper: VueWrapper) => {
  return wrapper.find("h2");
};

export const findButtonLogout = (wrapper: VueWrapper) => {
  return wrapper.findComponent(ElButton);
};

export const findTabs = (wrapper: VueWrapper) => {
  return wrapper.findAllComponents(ElTabPane);
};

export const findComponentOrderTabWindow = (wrapper: VueWrapper) => {
  return wrapper.findComponent(UserOrders);
};
