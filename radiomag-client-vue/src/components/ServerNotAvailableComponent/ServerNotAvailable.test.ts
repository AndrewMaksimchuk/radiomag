import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ServerNotAvailable from "./ServerNotAvailableComponent.vue";

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const global = {
  mocks,
};

const wrapper = shallowMount(ServerNotAvailable, {
  global,
});

const findHeader = () => {
  return wrapper.find("h2");
};

const findParagraph = () => {
  return wrapper.find("p");
};

describe("Spinner component", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have", () => {
    expect(findHeader().text()).toEqual("serverNotAvailale.header");
  });

  it("should have", () => {
    expect(findParagraph().text()).toEqual("serverNotAvailale.paragraph");
  });
});
