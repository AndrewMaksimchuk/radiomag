import type { VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { config } from "@vue/test-utils";
import { product } from "tests/mock/mockProduct";
import { buildWrapper, props } from "./testFunctions/buildWrapper";
import {
  getDescription,
  getHeader,
  getLinkToGoods,
  getLinkToSpecification,
} from "./testFunctions/find";

config.global.config.warnHandler = () => {
  return null;
};

let wrapper: VueWrapper;

describe("CardLineDescription component", () => {
  beforeEach(() => {
    wrapper = buildWrapper({ props });
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header text", () => {
    expect(getHeader(wrapper).text()).toBe(product.description.at(0));
  });

  describe("should have link", () => {
    it("should be visible", () => {
      expect(getLinkToGoods(wrapper).isVisible()).toBe(true);
    });

    it("should be with code", () => {
      expect(getLinkToGoods(wrapper).text()).toContain(product.id);
    });
  });

  it("should have description", () => {
    expect(getDescription(wrapper).text()).toBeTruthy();
  });

  it("should have link to specification", () => {
    expect(getLinkToSpecification(wrapper).exists()).toBe(true);
    const link =
      "https://www.rcscomponents.kiev.ua/" + product.datasheet_link_data;
    expect(getLinkToSpecification(wrapper).attributes("href")).toBe(link);
  });

  it("should dosn`t have link to specification", () => {
    props.product.datasheet_link_data = "";
    wrapper = buildWrapper({ props });
    expect(getLinkToSpecification(wrapper).exists()).toBe(false);
  });
});
