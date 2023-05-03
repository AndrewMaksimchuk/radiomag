import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import OrderContactFormContact from "@/components/OrderContactFormContactComponent.vue";

let wrapper: VueWrapper;

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => text,
};

const global = {
  plugins,
  mocks,
};

const i18nValidatorsMock = () => {
  vi.mock("@/utils/i18n-validators", () => {
    return {
      required: () => vi.fn(),
      email: () => vi.fn(),
    };
  });
};

const buildWrapper = (options = {}) => {
  i18nValidatorsMock();
  wrapper = mount(OrderContactFormContact, { global, ...options });
};

const findHeader = () => wrapper.find("h3");
const findInput = () => wrapper.find("input");

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
