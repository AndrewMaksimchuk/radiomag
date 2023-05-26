import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount, VueWrapper, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { nextTick } from "vue";
import { useCart } from "@/store/cart";
import OrderForm from "@/components/OrderFormComponent.vue";
import workerProduct from "../mock/workerProduct.json";

vi.stubGlobal("scrollTo", () => true);

let wrapper: VueWrapper;

const mocks = {
  $t: (text: string) => text,
};

const stubs = {
  RouterLink: RouterLinkStub,
};

const global = {
  plugins: [createTestingPinia()],
  mocks,
  stubs,
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderForm, { global, ...options });
};

const findCost = () => wrapper.find("p.order-form__total-cost");
const findButtons = () => wrapper.findAll("button.order-form__button");
const getButtonClear = () => findButtons()[0];
const getButtonContinue = () => findButtons()[1];
const getButtonOrder = () => findButtons()[2];

const store = useCart();

describe("OrderForm component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have clear button", () => {
    expect(getButtonClear().isVisible()).toBe(true);
  });

  it("should have continue button", () => {
    expect(getButtonContinue().isVisible()).toBe(true);
  });

  it("should have make order button", () => {
    expect(getButtonOrder().isVisible()).toBe(true);
  });

  it("should have total cost of 0.00", () => {
    const containedText = "order.form.totalCost: 0.00";
    const text = findCost().text();
    expect(text).toContain(containedText);
  });

  it("should have total cost of 3250.00", async () => {
    const containedText = "order.form.totalCost: 3250.00";
    store.cart.push({ quantity: 5, product: workerProduct });
    await nextTick();
    const text = findCost().text();
    expect(text).toContain(containedText);
  });

  it("should clear cart", async () => {
    const containedText = "order.form.totalCost: 0.00";
    store.cart = [];
    await getButtonClear().trigger("click");
    expect(findCost().text()).toContain(containedText);
  });
});
