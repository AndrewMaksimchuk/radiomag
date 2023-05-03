import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import HeaderCart from "@/components/HeaderCartComponent.vue";

let wrapper: VueWrapper;

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => text,
};

const stubs = {
  RouterLink: RouterLinkStub,
};

const global = {
  plugins,
  mocks,
  stubs,
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(HeaderCart, { global, ...options });
};

const findButton = () => wrapper.find("button");
const findImg = () => wrapper.find("img");
const findText = () => wrapper.find("span");

describe("HeaderCart component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    console.log(wrapper.html());
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have image with corect attributes", () => {
    const attr = findImg().attributes();
    console.log();
    expect(attr["src"]).toBeTruthy();
    expect(attr["alt"]).toBeTruthy();
  });

  it("should have correct i18n key", () => {
    const i18nKey = "header.info.basket";
    expect(findButton().text()).toContain(i18nKey);
  });

  it("should have number of items in cart", () => {
    expect(findText().text()).toEqual("0");
  });
});
