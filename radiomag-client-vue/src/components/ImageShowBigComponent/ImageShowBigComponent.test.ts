import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { ImageShowBig } from ".";

const plugins = [createTestingPinia()];

const mocks = {
  store: {
    isVisible: true,
    data: {
      src: "/images/product/1347",
      alt: "1n4007",
    },
  },
};

const global = {
  plugins,
  mocks,
};

const options = {
  global,
};

const buildWrapper = (opt: typeof options) => {
  return shallowMount(ImageShowBig, opt);
};

let wrapper = buildWrapper(options);

beforeEach(() => {
  wrapper = buildWrapper(options);
});

describe("ImageShowBig component", () => {
  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have image", () => {
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("image should have src", () => {
    expect(wrapper.find("img").attributes()["src"]).toEqual(
      mocks.store.data.src
    );
  });

  it("image should have alt", () => {
    expect(wrapper.find("img").attributes()["alt"]).toEqual(
      mocks.store.data.alt
    );
  });
});
