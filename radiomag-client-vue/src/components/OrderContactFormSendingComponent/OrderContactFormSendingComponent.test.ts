/* eslint-disable max-lines */
import type { DefinedComponent } from "@vue/test-utils/dist/types";
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { validateComponents } from "tests/mock/validateComponents";
import { i18nValidators } from "tests/mock/i18n-validators";
import { OrderContactFormSending } from "@/components";
import { OrderContactFormSendingTypeOfDelivery } from "@/components";
import { OrderContactFormSendingCity } from "@/components";
import { OrderContactFormSendingAddress } from "@/components";
import { OrderContactFormSendingRecipient } from "@/components";
import { OrderContactFormSendingContactPerson } from "@/components";
import { OrderContactFormSendingTelFax } from "@/components";

validateComponents();
i18nValidators();

const components = [
  OrderContactFormSendingTypeOfDelivery,
  OrderContactFormSendingCity,
  OrderContactFormSendingAddress,
  OrderContactFormSendingRecipient,
  OrderContactFormSendingContactPerson,
  OrderContactFormSendingTelFax,
];

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
  wrapper = shallowMount(OrderContactFormSending, { global, ...options });
};

const findHeader = () => {
  return wrapper.find("h3");
};
const findComponent = (component: DefinedComponent) => {
  return wrapper.findComponent(component);
};

describe("OrderContactFormSending component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header", () => {
    const i18nKeyText = "order.form.sending";
    expect(findHeader().text()).toEqual(i18nKeyText);
  });

  it("should have components", () => {
    components.forEach((component) => {
      return expect(findComponent(component).isVisible()).toBe(true);
    });
  });
});
