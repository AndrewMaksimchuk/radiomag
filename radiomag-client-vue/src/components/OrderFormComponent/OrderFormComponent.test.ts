import type { VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { nextTick } from "vue";
import { useCart } from "@/store/cart";
import workerProduct from "@/../tests/mock/workerProduct.json";
import { buildWrapper } from "./testFunctions/buildWrapper";
import {
  findCost,
  getButtonClear,
  getButtonContinue,
  getButtonOrder,
} from "./testFunctions/find";

vi.stubGlobal("scrollTo", () => {
  return true;
});

let wrapper: VueWrapper;
const store = useCart();

describe("OrderForm component", () => {
  beforeEach(() => {
    wrapper = buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have clear button", () => {
    expect(getButtonClear(wrapper).isVisible()).toBe(true);
  });

  it("should have continue button", () => {
    expect(getButtonContinue(wrapper).isVisible()).toBe(true);
  });

  it("should have make order button", () => {
    expect(getButtonOrder(wrapper).isVisible()).toBe(true);
  });

  it("should have total cost of 0.00", () => {
    const containedText = "order.form.totalCost: 0.00";
    expect(findCost(wrapper).text()).toContain(containedText);
  });

  it("should have total cost of 3250.00", async () => {
    const containedText = "order.form.totalCost: 3250.00";
    store.cart.push({ quantity: 5, product: workerProduct });
    await nextTick();
    expect(findCost(wrapper).text()).toContain(containedText);
  });

  it("should clear cart", async () => {
    const containedText = "order.form.totalCost: 0.00";
    store.cart = [];
    await getButtonClear(wrapper).trigger("click");
    expect(findCost(wrapper).text()).toContain(containedText);
  });
});
