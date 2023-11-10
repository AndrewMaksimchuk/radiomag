import type { VueWrapper } from "@vue/test-utils";

export const getHeader = (wrapper: VueWrapper) => {
  return wrapper.find("h3");
};

export const getLinkToGoods = (wrapper: VueWrapper) => {
  return wrapper.find(".common-link");
};

export const getDescription = (wrapper: VueWrapper) => {
  return wrapper.find(".card-line__center-description-main-text");
};

export const getLinkToSpecification = (wrapper: VueWrapper) => {
  return wrapper.find(".card-line__center-description-tech-info-link");
};
