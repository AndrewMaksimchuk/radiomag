import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import FormValidationError from "@/components/FormValidationErrorComponent.vue";

let wrapper: VueWrapper;

const props = {
  isShow: false,
  errors: "",
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(FormValidationError, { props, ...options });
};

const findErrorContainer = () => wrapper.find("small");

describe("FormValidationError component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    console.log(wrapper.html());
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have default slot", () => {
    const slots = {
      default: "Input element",
    };
    buildWrapper({ slots });
    expect(wrapper.text()).toContain(slots.default);
  });

  it("should have hidden error message", () => {
    expect(findErrorContainer().text()).toEqual("");
  });

  it("should show error message", () => {
    const props = {
      isShow: true,
      errors: "Required!",
    };
    buildWrapper({ props });
    expect(findErrorContainer().text()).toEqual(props.errors);
  });
});
