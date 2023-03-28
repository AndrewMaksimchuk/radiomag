import { describe, it, expect } from "vitest";
import { mount, MountingOptions } from "@vue/test-utils";
import { i18n } from "@/languages";
import Error404 from "@/views/Error404Page.vue";

const buildWrapper = (options: MountingOptions<Record<string, unknown>> = {}) =>
  mount(Error404, options);

const wrapper = buildWrapper({
  global: {
    plugins: [i18n],
  },
});

const findHeader = () => wrapper.find(".error__header-text");
const findDescription = () => wrapper.find(".error__description-text");
const findIcon = () => wrapper.find(".error__icon");

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
