import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import CardLine from "@/components/CardLineComponent.vue";
import CardLineImage from "@/components/CardLineImageComponent.vue";
import CardLineDescription from "@/components/CardLineDescriptionComponent.vue";
import ProductAvailability from "@/components/ProductAvailability.vue";
import ProductPrice from "@/components/ProductPrice.vue";
import QuantitySelectionForm from "@/components/QuantitySelectionFormComponent.vue";
import product from "../mock/workerProduct.json";

let wrapper: VueWrapper;

const mocks = {
  $t: (text: string) => text,
};

const props = {
  product,
  filterHeaders: [],
};

const global = {
  plugins: [createTestingPinia()],
  mocks,
};

const options = {
  global,
  props,
};

const buildWrapper = () => {
  wrapper = shallowMount(CardLine, options);
};

describe("CardLine component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have image", () => {
    expect(wrapper.findComponent(CardLineImage).exists()).toBe(true);
  });

  it("should have description", () => {
    expect(wrapper.findComponent(CardLineDescription).exists()).toBe(true);
  });

  it("should have data about availaility", () => {
    expect(wrapper.findComponent(ProductAvailability).exists()).toBe(true);
  });

  it("should have data about price", () => {
    expect(wrapper.findComponent(ProductPrice).exists()).toBe(true);
  });

  it("should have form of select and add", () => {
    expect(wrapper.findComponent(QuantitySelectionForm).exists()).toBe(true);
  });
});
