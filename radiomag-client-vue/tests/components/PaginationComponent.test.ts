import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import Pagination from "@/components/PaginationComponent.vue";
import PaginationItem from "@/components/PaginationItemComponent.vue";

let wrapper: VueWrapper;

const global = {
  plugins: [createTestingPinia()],
};

const props = {
  length: 0,
};

const slots = {
  default: "Main Content",
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(Pagination, {
    global,
    props,
    slots,
    ...options,
  });
};

const findComponent = () => wrapper.findComponent(PaginationItem);

describe("Pagination component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visile", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have component", () => {
    expect(findComponent().isVisible()).toBe(true);
  });

  it("should have default slot", () => {
    expect(wrapper.html()).toContain(slots.default);
  });
});
