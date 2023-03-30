import type { CartItem } from "@/store/cart";
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import OrderCard from "@/components/OrderCardComponent.vue";
import ProductAvailability from "@/components/ProductAvailability.vue";
import ProductPrice from "@/components/ProductPrice.vue";
import QuantitySelectionForm from "@/components/QuantitySelectionFormComponent.vue";

const components = [ProductAvailability, ProductPrice, QuantitySelectionForm];

let wrapper: VueWrapper;

const global = {
  plugins: [createTestingPinia()],
  mocks: {
    $t: (text: string) => text,
  },
};

interface OrderCard {
  goods: CartItem;
  index: number;
}

const props: OrderCard = {
  goods: {
    product: {
      image: "",
      description: ["stm32f103c8t6 microchip from STM"],
      id: 32103,
      stock_data: [
        {
          stock: "",
          stockName: "",
        },
      ],
      pcs: "",
      prices: [
        {
          disabled: false,
          p: 10,
          q: 32,
        },
      ],
    },
    quantity: 3,
  },
  index: 0,
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderCard, { global, props, ...options });
};

const findImage = () => wrapper.find("img");
const findHeader = () => wrapper.find("h3");
const findCode = () => wrapper.find("p");
const findDeleteButton = () => wrapper.find("button");

describe("OrderCard component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have components", () => {
    components.forEach((component) => {
      expect(wrapper.findComponent(component)?.isVisible()).toBeTruthy();
    });
  });

  it("should have image", () => {
    expect(findImage().isVisible()).toBe(true);
  });

  it("should have header text", () => {
    expect(findHeader().isVisible()).toBe(true);
    expect(findHeader().text()).toEqual(props.goods.product.description[0]);
  });

  it("should have code", () => {
    expect(findCode().isVisible()).toBe(true);
    expect(findCode().text()).toEqual(
      "order.codeGoods: " + props.goods.product.id
    );
  });

  it("should have delete button", () => {
    expect(findDeleteButton().isVisible()).toBe(true);
  });
});
