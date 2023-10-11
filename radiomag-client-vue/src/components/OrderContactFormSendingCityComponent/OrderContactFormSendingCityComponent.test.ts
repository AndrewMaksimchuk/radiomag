import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import OrderContactFormSendingCity from "./OrderContactFormSendingCityComponent.vue";

i18nValidators();
config.global.config.warnHandler = () => {
  return null;
};
let wrapper: VueWrapper;
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

const buildWrapper = (options = {}) => {
  wrapper = mount(OrderContactFormSendingCity, { global, ...options });
};
const findLabel = () => {
  return wrapper.find("label");
};
const findInput = () => {
  return wrapper.find("input");
};

describe("OrderContactFormSendingCity component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have label", () => {
    const i18nKeyText = "order.form.city";
    const field = findLabel();
    expect(field.isVisible()).toBe(true);
    expect(field.text()).toEqual(i18nKeyText);
  });

  it("should have input field", () => {
    const i18nKeyText = "orderContactFormSendingCity.placeholder";
    const field = findInput();
    const attr = field.attributes();
    expect(field.isVisible()).toBe(true);
    expect(attr["placeholder"]).toEqual(i18nKeyText);
    expect(attr["type"]).toEqual("text");
    expect(attr["name"]).toEqual("city");
  });
});
