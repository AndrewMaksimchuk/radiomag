import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { usePagination } from "@/store/pagination";
import { nextTick } from "vue";
import PaginationItem from "@/components/PaginationItemComponent.vue";
import PaginationButtonToStart from "@/components/PaginationButtonToStartComponent.vue";
import PaginationButtonToLeft from "@/components/PaginationButtonToLeft.vue";
import PaginationButton from "@/components/PaginationButton.vue";
import PaginationButtonToRight from "@/components/PaginationButtonToRight.vue";
import PaginationButtonToEnd from "@/components/PaginationButtonToEndComponent.vue";
import PaginationQuantity from "@/components/PaginationQuantityComponent.vue";

const components = [
  PaginationButtonToStart,
  PaginationButtonToLeft,
  PaginationButton,
  PaginationButtonToRight,
  PaginationButtonToEnd,
  PaginationQuantity,
];

let wrapper: VueWrapper;
let store: ReturnType<typeof usePagination>;

const global = {
  plugins: [createTestingPinia()],
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(PaginationItem, { global, ...options });
};

describe("PaginationItem component", () => {
  beforeEach(() => {
    buildWrapper();
    store = usePagination();
  });

  it("should be hidden", () => {
    expect(wrapper.isVisible()).toBe(false);
  });

  it("should be visible", async () => {
    store.length = 4;
    await nextTick();
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have components", async () => {
    store.length = 4;
    await nextTick();
    components.forEach((component) => {
      expect(wrapper.findComponent(component).isVisible()).toBeTruthy();
    });
  });
});
