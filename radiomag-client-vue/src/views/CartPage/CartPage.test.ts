import { describe, it, expect } from "vitest";
import { mockStoreI18n } from "tests/mock/mockStoreI18n";
import { i18n } from "@/languages";
import { pinia } from "@/main";
import { isComponentRender } from "tests/isComponentRender";
import { useCart } from "@/store/cart";
import { Order } from "@/components/OrderComponent";
import { OrderContactForm } from "@/components/OrderContactFormComponent";
import { buildWrapper } from "./testFunctions/buildWrapper";
import product from "tests/mock/workerProduct.json";

mockStoreI18n();

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
      store.add({ quantity: 5, product });
    });

    it("hidden empty cart text", () => {
      expect(wrapper.find("h2").exists()).toBe(false);
    });

    isComponentRender(wrapper, Order, "Order");
    isComponentRender(wrapper, OrderContactForm, "OrderContactForm");
  });
});
