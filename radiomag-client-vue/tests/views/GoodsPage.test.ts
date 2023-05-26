import { describe, it, expect, vi } from "vitest";
import { MountingOptions, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useGoods } from "@/store/goods";
import GoodsPage from "@/views/GoodsPage.vue";
import product from "../mock/workerProduct.json";

vi.stubGlobal("scrollTo", () => true);

const buildWrapper = (options: MountingOptions<Record<string, unknown>> = {}) =>
  shallowMount(GoodsPage, options);

const wrapper = buildWrapper({
  global: {
    plugins: [createTestingPinia()],
  },
});

const store = useGoods();

describe("Goods page", () => {
  it("should dont be displayed", () => {
    expect(wrapper.isVisible()).toBe(false);
  });

  describe("should be displayed", () => {
    beforeEach(() => {
      store.goods = {
        product,
        filterHeaders: [],
      };
    });

    it("should contain goods", () => {
      expect(wrapper.isVisible()).toBe(true);
    });
  });
});
