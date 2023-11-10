import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { mockStoreI18n } from "tests/mock/mockStoreI18n";
import { i18nValidators } from "tests/mock/i18n-validators";
import { vueToastification } from "tests/mock/vue-toastification";
import { OrderContactForm } from "@/components";

mockStoreI18n();
i18nValidators();
vueToastification();

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

const findForm = () => {
  return wrapper.find("form");
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderContactForm, { global, ...options });
};

describe("OrderContactForm component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have form", () => {
    const form = findForm();
    const attr = form.attributes();
    expect(attr["name"]).toEqual("orderContacts");
    expect(attr["method"]).toEqual("post");
  });
});
