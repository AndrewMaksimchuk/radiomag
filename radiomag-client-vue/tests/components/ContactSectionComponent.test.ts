import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper, config } from "@vue/test-utils";
import ContactSection from "@/components/ContactSectionComponent.vue";

config.global.config.warnHandler = () => null;

let wrapper: VueWrapper;

const props = {
  headerText: "Test header text",
};

const slots = {
  default: "Main Content",
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(ContactSection, { props, slots, ...options });
};

const findHeader = () => wrapper.find("h2");

describe("ComponentName", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  it("should have header text", () => {
    expect(findHeader().text()).toEqual(props.headerText);
  });

  it("should be render slot", () => {
    expect(wrapper.html()).toContain(slots.default);
  });
});
