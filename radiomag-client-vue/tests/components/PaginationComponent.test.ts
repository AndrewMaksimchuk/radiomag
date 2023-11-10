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
  hide: false,
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

const findComponent = () => {
  return wrapper.findComponent(PaginationItem);
};

describe("Pagination component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visile", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should don`t have component PaginationItem", () => {
    expect(findComponent().exists()).toBe(false);
  });

  it("should have component PaginationItem visible", () => {
    buildWrapper({
      props: {
        length: 0,
        hide: true,
      },
    });
    expect(findComponent().isVisible()).toBe(true);
  });

  it("should have default slot", () => {
    expect(wrapper.html()).toContain(slots.default);
  });
});
