import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import OrderContactForm from "@/components/OrderContactFormComponent.vue";

i18nValidators();

let wrapper: VueWrapper;

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => text,
};

const global = {
  plugins,
  mocks,
};

const findForm = () => wrapper.find("form");

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
