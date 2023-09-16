import { describe, it, expect } from "vitest";
import { mount, MountingOptions } from "@vue/test-utils";
import { i18n } from "@/languages";
import { HTTP404 } from "@/views/HTTP404Page";

const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  return mount(HTTP404, options);
};

const wrapper = buildWrapper({
  global: {
    plugins: [i18n],
  },
});

const findHeader = () => {
  return wrapper.find(".error__header-text");
};
const findDescription = () => {
  return wrapper.find(".error__description-text");
};
const findIcon = () => {
  return wrapper.find(".error__icon");
};

describe("Error 404 page", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  it("should have header text", () => {
    const header = findHeader();
    expect(header.exists()).toBe(true);
    expect(header.text().length).toBeTruthy();
  });

  it("should have description text", () => {
    const description = findDescription();
    expect(description.exists()).toBe(true);
    expect(description.text().length).toBeTruthy();
  });

  it("should have icon", () => {
    expect(findIcon().exists()).toBe(true);
  });
});
