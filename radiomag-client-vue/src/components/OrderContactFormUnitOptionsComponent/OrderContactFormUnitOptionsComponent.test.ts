/* eslint-disable max-lines */
import type { VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { mockHTTPClient } from "tests/mock/mockHTTPClient";
import { shopsResponseData } from "tests/mock/mockHTTPClient/getResponseData/shops";
import { managersResponseData } from "tests/mock/mockHTTPClient/getResponseData/managers";
import OrderContactFormUnitOptions from "./OrderContactFormUnitOptionsComponent.vue";

mockHTTPClient();

let wrapper: VueWrapper;

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const global = {
  mocks,
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderContactFormUnitOptions, { global, ...options });
};

const findOptGroup = () => {
  return wrapper.findAll("optgroup");
};

const findOptions = () => {
  return wrapper.findAll("option");
};

describe("OrderContactFormUnit component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have placeholder option", () => {
    const elem = findOptions()[0];
    const elemAttrs = elem.attributes();
    expect(elem.text()).toEqual("orderContactFormUnitOptions.header");
    expect(elemAttrs["disabled"]).toBe("");
    expect(elemAttrs["hidden"]).toBe("");
  });

  it("should have 'optgroup' fields", () => {
    expect(findOptGroup().length).toEqual(shopsResponseData.length);
  });

  it("should have 'option' fields", () => {
    expect(findOptions().length).toEqual(managersResponseData.length + 1);
  });
});
