/* eslint-disable max-lines */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import { OrderContactFormUnit } from "@/components";

i18nValidators();

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
  wrapper = mount(OrderContactFormUnit, { global, ...options });
};

const options = [
  { value: "shop", textI18nKey: "orderContactFormUnit.options.shop" },
  { value: "manager", textI18nKey: "orderContactFormUnit.options.manager" },
];

const findHeader = () => {
  return wrapper.find("h3");
};
const findSelect = () => {
  return wrapper.find("select");
};
const findOptions = () => {
  return wrapper.findAll("option");
};

describe("OrderContactFormUnit component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header", () => {
    const i18nKeyText = "order.form.unit";
    expect(findHeader().text()).toEqual(i18nKeyText);
  });

  it("should have select field", () => {
    expect(findSelect().attributes()["name"]).toEqual("unit");
  });

  it("should have option fields", () => {
    findOptions().forEach((element, index) => {
      expect(element.attributes()["value"]).toEqual(options[index].value);
      expect(element.text()).toEqual(options[index].textI18nKey);
    });
  });
});
