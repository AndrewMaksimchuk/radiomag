import { describe, it, expect, beforeEach } from "vitest";
import {
  shallowMount,
  VueWrapper,
  RouterLinkStub,
  config,
} from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

/* eslint-disable */
config.global.config.warnHandler = () => null;

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

  it("should be visible", () => {
    console.log(wrapper.html());
    expect(wrapper.isVisible()).toBe(true);
  });
});