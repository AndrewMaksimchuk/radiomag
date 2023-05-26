import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import OrderContactFormSendingAddress from "@/components/OrderContactFormSendingAddressComponent.vue";

const requireIfMock = () => {
  vi.mock("@/utils/i18n-validators", () => {
    return {
      requireIf: () => vi.fn(),
    };
  });
};

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
  wrapper = mount(OrderContactFormSendingAddress, { global, ...options });
};

const findLabel = () => wrapper.find("label");
const findInput = () => wrapper.find("input");

describe("OrderContactFormSendingAddress component", () => {
  beforeEach(() => {
    requireIfMock();
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
