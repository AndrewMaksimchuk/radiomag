import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import GoodsImage from "@/components/GoodsImageComponent.vue";
import product from "../mock/workerProduct.json";

let wrapper: VueWrapper;

const props = {
  goods: {
    product,
    filterHeaders: [],
  },
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(GoodsImage, { props, ...options });
};

const findImage = () => wrapper.find("img");

describe("GoodsImage component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have default image", () => {
    const props = {
      goods: {
        product: {
          ...product,
          image: "",
        },
      },
    };
    buildWrapper({ props });
    const img = findImage();
    expect(img.attributes("src")).toContain("empty.jpg");
    expect(img.attributes("alt")).toEqual("empty image");
  });

  it("should have goods image", () => {
    const props = {
      goods: {
        product: {
          image: "images/stm32f103c8t6.png",
          description: ["Test goods description"],
        },
      },
    };
    buildWrapper({ props });
    const img = findImage();
    expect(img.attributes("src")).toContain(props.goods.product.image);
    expect(img.attributes("alt")).toEqual(props.goods.product.description[0]);
  });
});
