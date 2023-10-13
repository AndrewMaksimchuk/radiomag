/* eslint-disable max-lines */
import type { CartItem } from "$/dto/Cart";
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { OrderCard } from "@/components";
import ProductAvailability from "@/components/ProductAvailability.vue";
import ProductPrice from "@/components/ProductPrice.vue";
import { QuantitySelectionForm } from "@/components";
import product from "../mock/workerProduct.json";

const components = [ProductAvailability, ProductPrice, QuantitySelectionForm];

let wrapper: VueWrapper;

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const stubs = {
  RouterLink: RouterLinkStub,
};

const global = {
  plugins: [createTestingPinia()],
  mocks,
  stubs,
};

interface OrderCard {
  goods: CartItem;
  index: number;
}

const props: OrderCard = {
  goods: {
    product,
    quantity: 3,
  },
  index: 0,
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderCard, { global, props, ...options });
};

const findImage = () => {
  return wrapper.find("img");
};
const findHeader = () => {
  return wrapper.find("h3");
};
const findCode = () => {
  return wrapper.find("p");
};
const findDeleteButton = () => {
  return wrapper.find("button");
};

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

  it("should have link to goods page", () => {
    expect(wrapper.findComponent(RouterLinkStub).props().to.params).toEqual({
      code: product.id,
    });
  });
});
