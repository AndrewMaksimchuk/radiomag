import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import OrderTableComponent from "@/components/OrderTableComponent.vue";

let wrapper: VueWrapper;

const global = {
  mocks: {
    $t: (text: string) => text,
  },
};

const slots = {
  default: "Content of slot",
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderTableComponent, { global, slots, ...options });
};

const findHeaderRow = () => wrapper.find(".order__table-row");
const findSlot = () => wrapper.find("tbody");

describe("OrderTable component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header row with translate keys", () => {
    const keys = [
      "order.photo",
      "order.name",
      "order.inStock",
      "order.cost",
      "order.quantity",
    ];
    const text = findHeaderRow().text();
    const isHave = keys.every((key) => text.includes(key));
    expect(isHave).toBe(true);
  });

  it("should render default slot content", () => {
    expect(findSlot().text()).toEqual(slots.default);
  });
});
