import type { VueWrapper } from "@vue/test-utils";

export const findForm = (wrapper: VueWrapper) => {
  return wrapper.find("form");
};

export const findNotification = (wrapper: VueWrapper) => {
  return wrapper.find(".notification-added-to-cart");
};

export const findButtonChangeQuantityDown = (wrapper: VueWrapper) => {
  return wrapper.findAll(".card-line__right-button")[0];
};

export const findButtonChangeQuantityUp = (wrapper: VueWrapper) => {
  return wrapper.findAll(".card-line__right-button")[1];
};

export const findInput = (wrapper: VueWrapper) => {
  return wrapper.find("input.card-line__right-input");
};

export const findButtonBuy = (wrapper: VueWrapper) => {
  return wrapper.find(".card-line__right-button-buy");
};
