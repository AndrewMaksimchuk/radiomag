import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import OrderContactFormOption from "@/components/OrderContactFormOptionComponent.vue";

let wrapper: VueWrapper;

const mocks = {
  $t: (text: string) => text,
};

const global = {
  mocks,
};

const props = {
  options: [{ value: "0", textI18nKey: "options.first" }],
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderContactFormOption, { global, props, ...options });
};

const findOption = () => wrapper.find("option");

describe("OrderContactFormOption component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have item", () => {
    const el = findOption();
    expect(el.element.value).toEqual(props.options[0].value);
    expect(el.text()).toEqual(props.options[0].textI18nKey);
  });
});
