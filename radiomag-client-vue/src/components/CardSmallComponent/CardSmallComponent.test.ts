import type { SliderItem } from "$/dto/Slider";
import { describe, it, expect } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { CardSmall } from "@/components";

let wrapper: VueWrapper;

const getElementImg = () => {
  return wrapper.find("img");
};
const getElementHeader = () => {
  return wrapper.find("h3");
};
const getElementDescription = () => {
  return wrapper.find(".small-goods-card__description");
};

const props: Record<"data", SliderItem> = {
  data: {
    description: "Mcrochip",
    imgsrc: "stm32f103c8t6.png",
    title: "stm32f103c8t6",
  },
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(CardSmall, { ...options });
};

describe("CardSmall component", () => {
  beforeEach(() => {
    buildWrapper({ props });
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have image", () => {
    expect(getElementImg().isVisible()).toBe(true);
    expect(getElementImg().attributes("src")).toContain(props.data.imgsrc);
  });

  it("should have header", () => {
    expect(getElementHeader().isVisible()).toBe(true);
    expect(getElementHeader().text()).toEqual(props.data.title);
  });

  it("should have description", () => {
    expect(getElementDescription().isVisible()).toBe(true);
    expect(getElementDescription().text()).toEqual(props.data.description);
  });
});
