import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import OrderContactFormButtonsGroup from "@/components/OrderContactFormButtonsGroupComponent.vue";

config.global.config.warnHandler = () => null;

let wrapper: VueWrapper;

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => text,
};

const global = {
  plugins,
  mocks,
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderContactFormButtonsGroup, { global, ...options });
};

const findButtonContinue = () => wrapper.find('button[type="button"]');
const findButtonSubmit = () => wrapper.find('button[type="submit"]');

describe("OrderContactFormButtonsGroup component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have button for continue", () => {
    const i18nKeyText = "order.form.continue";
    expect(findButtonContinue().text()).toEqual(i18nKeyText);
  });

  it("should have button ", () => {
    const i18nKeyText = "order.form.send";
    expect(findButtonSubmit().text()).toEqual(i18nKeyText);
  });
});
