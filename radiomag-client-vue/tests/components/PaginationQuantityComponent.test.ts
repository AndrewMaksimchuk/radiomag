import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { usePagination } from "@/store/pagination";
import PaginationQuantity from "@/components/PaginationQuantityComponent.vue";

let wrapper: VueWrapper;
let store: ReturnType<typeof usePagination>;

const global = {
  plugins: [createTestingPinia()],
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(PaginationQuantity, { global, ...options });
};

const findElementOption = () => wrapper.findAll("option");

describe("PaginationQuantity component", () => {
  beforeEach(() => {
    buildWrapper();
    store = usePagination();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have options", () => {
    expect(findElementOption()).toHaveLength(store.quantity.length);
  });
});
