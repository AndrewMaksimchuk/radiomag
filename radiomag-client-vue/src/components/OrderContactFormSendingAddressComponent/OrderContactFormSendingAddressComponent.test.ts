/* eslint-disable max-lines */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import OrderContactFormSendingAddress from "./OrderContactFormSendingAddressComponent.vue";

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
  wrapper = mount(OrderContactFormSendingAddress, { global, ...options });
};

const findLabel = () => {
  return wrapper.find("label");
};
const findInput = () => {
  return wrapper.find("input");
};

describe("OrderContactFormSendingAddress component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have label", () => {
    const label = findLabel();
    const i18nKeyText = "order.form.address";
    expect(label.isVisible()).toBe(true);
    expect(label.text()).toEqual(i18nKeyText);
  });

  it("should have input", () => {
    const field = findInput();
    const attr = field.attributes();
    expect(field.isVisible()).toBe(true);
    expect(attr["type"]).toEqual("text");
    expect(attr["name"]).toEqual("address");
  });
});
