import { describe, it, expect } from "vitest";
import { mount, MountingOptions } from "@vue/test-utils";
import { i18n } from "@/languages";
import { pinia } from "@/main";
import { isComponentRender } from "tests/isComponentRender";
import { useCart } from "@/store/cart";
import CartPage from "@/views/CartPage.vue";
import Order from "@/components/OrderComponent.vue";
import OrderContactForm from "@/components/OrderContactForm.vue";
import testGroup from "../mock/capacitor_group.json";

const buildWrapper = (options: MountingOptions<Record<string, unknown>> = {}) =>
  mount(CartPage, options);

let wrapper = buildWrapper({
  global: {
    plugins: [i18n, pinia],
  },
});

const store = useCart();

describe("Cart page", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  describe("should be empty", () => {
    it("displayed empty cart text", () => {
      expect(wrapper.find("h2").exists()).toBe(true);
    });

    it(`should hidden the component "Order"`, () => {
      expect(wrapper.findComponent(Order).exists()).toBe(false);
    });

    it(`should hidden the component "OrderContactForm"`, () => {
      expect(wrapper.findComponent(OrderContactForm).exists()).toBe(false);
    });
  });

  describe("should contain goods", () => {
    beforeEach(() => {
      wrapper = buildWrapper({
        global: {
          plugins: [i18n, pinia],
          stubs: { Order: true, OrderContactForm: true },
        },
      });
      store.add({ quantity: 5, product: testGroup.items[0] });
    });

    it("hidden empty cart text", () => {
      expect(wrapper.find("h2").exists()).toBe(false);
    });

    isComponentRender(wrapper, Order, "Order");
    isComponentRender(wrapper, OrderContactForm, "OrderContactForm");
  });
});
