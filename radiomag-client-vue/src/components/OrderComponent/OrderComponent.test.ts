import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { Order } from "@/components/OrderComponent";
import { OrderForm } from "@/components/OrderFormComponent";
import OrderTable from "@/components/OrderTableComponent.vue";

let wrapper: VueWrapper;

const global = {
  plugins: [createTestingPinia()],
  mocks: {
    $t: (text: string) => {
      return text;
    },
  },
};

const props = {
  cart: [],
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(Order, { global, props, ...options });
};

const findHeader = () => {
  return wrapper.find(".order__header-text");
};

describe("Order component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should have header", () => {
    expect(findHeader().isVisible()).toBe(true);
    expect(findHeader().text()).toEqual("order.header:");
  });

  it("should have component OrderTable", () => {
    expect(wrapper.findComponent(OrderTable).isVisible()).toBe(true);
  });

  it("should have component OrderForm", () => {
    expect(wrapper.findComponent(OrderForm).isVisible()).toBe(true);
  });
});
