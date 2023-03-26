import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import CardLineImage from "@/components/CardLineImageComponent.vue";

let wrapper: VueWrapper;

const getElementImg = () => wrapper.find("img");
const getAttrSrc = () => getElementImg().attributes("src");
const getAttrAlt = () => getElementImg().attributes("alt");

const global = {
  plugins: [createTestingPinia()],
};

const props = {
  img: "test_img_link",
  alt: "test alt text",
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(CardLineImage, { ...options, global });
};

describe("CardLineImage component", () => {
  beforeEach(() => {
    buildWrapper({
      global,
      props,
    });
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have source link", () => {
    expect(getAttrSrc()).toBe("https://www.rcscomponents.kiev.ua" + props.img);
  });

  it("should have alt text", () => {
    expect(getAttrAlt()).toBe(props.alt);
  });

  it("should have default image", () => {
    buildWrapper();
    expect(getAttrSrc()).toContain("/empty.jpg");
  });
});
