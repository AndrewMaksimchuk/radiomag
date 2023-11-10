import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { mockStoreI18n } from "@/../tests/mock/mockStoreI18n";
import { vueToastification } from "@/../tests/mock/vue-toastification";
import Bulletin from "./BulletinComponent.vue";

mockStoreI18n();
vueToastification();
const plugins = [createTestingPinia()];
const mocks = {
  $t: (text: string) => {
    return text;
  },
};
const global = {
  plugins,
  mocks,
};
const wrapper = shallowMount(Bulletin, {
  global,
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
const findInput = () => {
  return wrapper.find("input");
};
const findButton = () => {
  return wrapper.find("button");
};

describe("Bulletin component", () => {
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
  it("should have input element", () => {
    expect(findInput().isVisible()).toBe(true);
  });
  it("should have button element", () => {
    expect(findButton().isVisible()).toBe(true);
  });
});
