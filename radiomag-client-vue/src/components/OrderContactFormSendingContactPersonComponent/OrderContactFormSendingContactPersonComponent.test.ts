import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import OrderContactFormSendingContactPerson from "./OrderContactFormSendingContactPersonComponent.vue";

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
  wrapper = mount(OrderContactFormSendingContactPerson, { global, ...options });
};

const findLabel = () => {
  return wrapper.find("label");
};
const findInput = () => {
  return wrapper.find("input");
};

describe("OrderContactFormSendingContactPerson component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have label", () => {
    const i18nKeyText = "order.form.contactPerson";
    expect(findLabel().text()).toEqual(i18nKeyText);
  });

  it("should have input", () => {
    const i18nKeyText = "orderContactFormSendingContactPerson.placeholder";
    const attr = findInput().attributes();
    expect(attr["type"]).toEqual("text");
    expect(attr["name"]).toEqual("contactPerson");
    expect(attr["placeholder"]).toEqual(i18nKeyText);
  });
});
