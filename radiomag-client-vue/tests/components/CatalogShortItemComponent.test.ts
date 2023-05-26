import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import CatalogShortItem from "@/components/CatalogShortItemComponent.vue";
import { useCatalog } from "@/store/catalog";

let wrapper: VueWrapper;

const global = {
  plugins: [createTestingPinia()],
};

const props = {
  data: {
    id: 1,
    img: "test-image,png",
    name: "stm32f103c8t6",
  },
};

const options = {
  global,
  props,
};

const buildWrapper = () => {
  wrapper = shallowMount(CatalogShortItem, options);
};

const findButton = () => wrapper.find("button");
const findImage = () => wrapper.find("img");
const findHeader = () => wrapper.find("h3");

const catalogStore = useCatalog();

beforeEach(() => buildWrapper());

describe("CatalogShortItem component", () => {
  it("should be visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  it("should have button", async () => {
    expect(findButton().isVisible()).toBeTruthy();
    await findButton().trigger("click");
    expect(catalogStore.useMenuGroups).toHaveBeenCalled();
  });

  it("should have image", () => {
    const img = findImage();
    expect(img.isVisible()).toBeTruthy();
    expect(img.attributes("src")).toEqual("/images/catalog/" + props.data.img);
    expect(img.attributes("alt")).toEqual(props.data.name);
  });

  it("should have header text", () => {
    expect(findHeader().text()).toEqual(props.data.name);
  });
});
