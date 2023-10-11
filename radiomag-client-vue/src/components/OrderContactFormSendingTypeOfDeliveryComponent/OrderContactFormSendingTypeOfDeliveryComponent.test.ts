/* eslint-disable max-lines */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import { OrderContactFormSendingTypeOfDelivery } from "@/components";

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
  wrapper = mount(OrderContactFormSendingTypeOfDelivery, {
    global,
    ...options,
  });
};

const options = [
  {
    value: "selfPickup",
    textI18nKey: "orderContactFormSendingTypeOfDelivery.selfPickup",
  },
  {
    value: "urkPost",
    textI18nKey: "orderContactFormSendingTypeOfDelivery.urkPost",
  },
  {
    value: "nodePost",
    textI18nKey: "orderContactFormSendingTypeOfDelivery.nodePost",
  },
];

const findLabel = () => {
  return wrapper.find("label");
};
const findSelect = () => {
  return wrapper.find("select");
};
const findOptions = () => {
  return wrapper.findAll("option");
};

describe("OrderContactFormSendingTypeOfDelivery component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have label", () => {
    const i18nKeyText = "order.form.typeOfDelivery";
    expect(findLabel().text()).toEqual(i18nKeyText);
  });

  it("should have select field", () => {
    const field = findSelect();
    const attr = field.attributes();
    expect(attr["name"]).toEqual("typeOfDelivery");
  });

  it("should have option fields", () => {
    const fields = findOptions();
    fields.forEach((element, index) => {
      expect(element.text()).toEqual(options[index].textI18nKey);
      expect(element.attributes()["value"]).toEqual(options[index].value);
    });
  });
});
