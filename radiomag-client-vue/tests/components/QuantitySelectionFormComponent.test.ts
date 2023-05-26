import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import QuantitySelectionForm from "@/components/QuantitySelectionFormComponent.vue";

let wrapper: VueWrapper;

const mocks = {
  $t: (text: string) => text,
};

const global = {
  mocks,
};

const props = {
  quantityOfProduct: 3,
};

const slots = {
  default: "Default slot content",
  button: "Button slot text",
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(QuantitySelectionForm, {
    global,
    props,
    slots,
    ...options,
  });
};

const findForm = () => wrapper.find("form");
const findNotification = () => wrapper.find(".notification-added-to-cart");
const findButtonChangeQuantityDown = () =>
  wrapper.findAll(".card-line__right-button")[0];
const findButtonChangeQuantityUp = () =>
  wrapper.findAll(".card-line__right-button")[1];
const findInput = () => wrapper.find("input.card-line__right-input");
const findButtonBuy = () => wrapper.find(".card-line__right-button-buy");

describe("QuantitySelectionForm component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have form", () => {
    expect(findForm().exists()).toBe(true);
  });

  it("should show notification", async () => {
    await findButtonBuy().trigger("click");
    const notification = findNotification();
    expect(notification.isVisible()).toBe(true);
    expect(notification.text()).toEqual("card.addedCart");
  });

  describe("should change quantity ", () => {
    it("to down", async () => {
      await findButtonChangeQuantityDown().trigger("click");
      expect(wrapper.emitted().changeQuantityOfProduct).toEqual([
        [props.quantityOfProduct - 1],
      ]);
    });

    it("to up", async () => {
      await findButtonChangeQuantityUp().trigger("click");
      expect(wrapper.emitted().changeQuantityOfProduct).toEqual([
        [props.quantityOfProduct + 1],
      ]);
    });
  });

  it("should have input field", () => {
    expect(findInput().isVisible()).toBe(true);
  });

  it("should change quantity from input field", async () => {
    await findInput().trigger("input");
    expect(wrapper.emitted().changeQuantityOfProduct).toEqual([
      [props.quantityOfProduct],
    ]);
  });

  describe("should render slot", () => {
    it("default", () => {
      expect(wrapper.text().includes(slots.default)).toBe(true);
    });

    it("button", () => {
      expect(findButtonBuy().text().includes(slots.button)).toBe(true);
    });
  });

  it("should add goods to cart", async () => {
    await findButtonBuy().trigger("click");
    expect(wrapper.emitted()).toHaveProperty("addToCart");
  });
});
