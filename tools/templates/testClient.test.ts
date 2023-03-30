import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper, config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

/* eslint-disable */

config.global.config.warnHandler = () => null;

let wrapper: VueWrapper;

const global = {
  plugins: [createTestingPinia()],
  mocks: {
    $t: (text: string) => text,
  },
};

const props = {};

const slots = {
  default: "Main Content",
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(ComponentName, { global, ...options });
};

describe("ComponentName", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("", () => {
    expect();
  });
});
