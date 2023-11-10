/* eslint-disable max-lines */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import { OrderContactFormSubscriptions } from "@/components";

config.global.config.warnHandler = () => {
  return null;
};

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
  wrapper = mount(OrderContactFormSubscriptions, { global, ...options });
};

const options = [
  {
    value: "creditCard",
    textI18nKey: "orderContactFormSubscriptions.creditCard",
  },
  {
    value: "cashlessWithoutVAT",
    textI18nKey: "orderContactFormSubscriptions.cashlessWithoutVAT",
  },
  {
    value: "cashlessWithVAT",
    textI18nKey: "orderContactFormSubscriptions.cashlessWithVAT",
  },
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

describe("OrderContactFormSubscriptions component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header", () => {
    const i18nKeyText = "order.form.subscriptions";
    expect(findHeader().text()).toEqual(i18nKeyText);
  });

  it("should have select field", () => {
    expect(findSelect().attributes()["name"]).toEqual("subscriptions");
  });

  it("should have option fields", () => {
    findOptions().forEach((element, index) => {
      expect(element.attributes()["value"]).toEqual(options[index].value);
      expect(element.text()).toEqual(options[index].textI18nKey);
    });
  });
});
