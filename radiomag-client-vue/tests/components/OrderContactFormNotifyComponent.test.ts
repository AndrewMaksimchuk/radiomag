import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import OrderContactFormNotify from "@/components/OrderContactFormNotifyComponent.vue";

let wrapper: VueWrapper;

const global = {
  mocks: {
    $t: (text: string) => text,
  },
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderContactFormNotify, { global, ...options });
};

describe("OrderContactFormNotify component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have translate keys", () => {
    const keys = [
      "order.form.notify[0]",
      "order.form.notify[1]",
      "order.form.notify[2]",
    ];
    const text = wrapper.text();
    const isHave = keys.every((key) => text.includes(key));
    expect(isHave).toBe(true);
  });
});
