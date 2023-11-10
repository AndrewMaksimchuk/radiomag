import type { VueWrapper } from "@vue/test-utils";
import CardLineImage from "@/components/CardLineImageComponent.vue";

export const findComponent = (wrapper: VueWrapper) => {
  return wrapper.findComponent(CardLineImage);
};

export const findLink = (wrapper: VueWrapper) => {
  return wrapper.find("a");
};

export const findSections = (wrapper: VueWrapper) => {
  return wrapper.findAll(".card-table__section").slice(1);
};
