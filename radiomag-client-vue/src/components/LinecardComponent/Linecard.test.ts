import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Linecard from "./LinecardComponent.vue";

const wrapper = shallowMount(Linecard, {
  global: {
    mocks: {
      $t: (text: string) => {
        return text;
      },
    },
  },
});

const findHeader = () => {
  return wrapper.find("h2");
};
const findForm = () => {
  return wrapper.find("form");
};
const findLable = () => {
  return wrapper.find("label");
};
const findSelectProductions = () => {
  return wrapper.find('select[name="productions"]');
};
const findSelectCategories = () => {
  return wrapper.find('select[name="categories"]');
};
const findButtonSubmit = () => {
  return wrapper.find("button");
};

describe("Linecard component", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header element", () => {
    expect(findHeader().isVisible()).toBe(true);
  });

  it("should have form element", () => {
    expect(findForm().isVisible()).toBe(true);
  });

  it("should have label element", () => {
    expect(findLable().isVisible()).toBe(true);
  });

  it("should have selector of productions", () => {
    expect(findSelectProductions().isVisible()).toBe(true);
    expect(findSelectProductions().text()).equal("linecard.productions");
  });

  it("should have selector of categories", () => {
    expect(findSelectCategories().isVisible()).toBe(true);
    expect(findSelectCategories().text()).equal("linecard.categories");
  });

  it("should have submit button", () => {
    expect(findButtonSubmit().isVisible()).toBe(true);
  });
});
