/* eslint-disable max-lines */
import type { VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { buildWrapper, props, slots } from "./testFunctions/buildWrapper";
import {
  findForm,
  findNotification,
  findButtonChangeQuantityDown,
  findButtonChangeQuantityUp,
  findInput,
  findButtonBuy,
} from "./testFunctions/find";

let wrapper: VueWrapper;

describe("QuantitySelectionForm component", () => {
  beforeEach(() => {
    wrapper = buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have form", () => {
    expect(findForm(wrapper).exists()).toBe(true);
  });

  it("should show notification", async () => {
    await findButtonBuy(wrapper).trigger("click");
    const notification = findNotification(wrapper);
    expect(notification.isVisible()).toBe(true);
    expect(notification.text()).toEqual("card.addedCart");
  });

  describe("should change quantity ", () => {
    it("to down", async () => {
      await findButtonChangeQuantityDown(wrapper).trigger("click");
      expect(wrapper.emitted().changeQuantityOfProduct).toEqual([
        [props.quantityOfProduct - 1],
      ]);
    });

    it("to up", async () => {
      await findButtonChangeQuantityUp(wrapper).trigger("click");
      expect(wrapper.emitted().changeQuantityOfProduct).toEqual([
        [props.quantityOfProduct + 1],
      ]);
    });
  });

  it("should have input field", () => {
    expect(findInput(wrapper).isVisible()).toBe(true);
  });

  it("should change quantity from input field", async () => {
    await findInput(wrapper).trigger("input");
    expect(wrapper.emitted().changeQuantityOfProduct).toEqual([
      [props.quantityOfProduct],
    ]);
  });

  describe("should render slot", () => {
    it("default", () => {
      expect(wrapper.text().includes(slots.default)).toBe(true);
    });

    it("button", () => {
      expect(findButtonBuy(wrapper).text().includes(slots.button)).toBe(true);
    });
  });

  it("should add goods to cart", async () => {
    await findButtonBuy(wrapper).trigger("click");
    expect(wrapper.emitted()).toHaveProperty("addToCart");
  });
});
