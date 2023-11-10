import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import OrderContactFormContact from "./OrderContactFormContactComponent.vue";

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
  wrapper = mount(OrderContactFormContact, { global, ...options });
};

const findHeader = () => {
  return wrapper.find("h3");
};
const findInput = () => {
  return wrapper.find("input");
};

describe("OrderContactFormContact component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header", () => {
    const i18nKeyText = "order.form.contact";
    expect(findHeader().text()).toEqual(i18nKeyText);
  });

  it("should have input field", async () => {
    const field = findInput();
    expect(field.exists()).toBe(true);

    const attr = field.attributes();
    expect(attr["type"]).toEqual("email");
    expect(attr["name"]).toEqual("email");
  });
});
