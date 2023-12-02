/* eslint-disable max-lines */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { i18nValidators } from "tests/mock/i18n-validators";
import { OrderContactFormUnit } from "@/components";

i18nValidators();

let wrapper: VueWrapper;

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

const buildWrapper = (options = {}) => {
  wrapper = mount(OrderContactFormUnit, { global, ...options });
};

const findHeader = () => {
  return wrapper.find("h3");
};
const findSelect = () => {
  return wrapper.find("select");
};

describe("OrderContactFormUnit component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header", () => {
    const i18nKeyText = "order.form.unit";
    expect(findHeader().text()).toEqual(i18nKeyText);
  });

  it("should have select field", () => {
    expect(findSelect().attributes()["name"]).toEqual("unit");
  });
});
