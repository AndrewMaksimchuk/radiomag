import { describe, it, expect, beforeAll } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import ProductsPage from "@/views/ProductsPage.vue";
import { createTestingPinia } from "@pinia/testing";
import { useCatalog } from "@/store/catalog";

const testPinia = createTestingPinia({
  initialState: {
    catalog: {
      allMenuGroups: [{ id: 1, img: "", name: "" }],
    },
  },
});

const wrapper = mount(ProductsPage, {
  global: {
    plugins: [testPinia],
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
});

const store = useCatalog();

const getLink = () => wrapper.findComponent(RouterLinkStub);
const getLinkImage = () => wrapper.find(".products__item-group-img");
const getLinkHeaderText = () => wrapper.find(".products__item-group-name");

describe("Products page", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  it("should be without links", () => {
    expect(getLink().exists()).toBe(false);
  });

  describe("should have link", () => {
    beforeAll(() => {
      store.catalogGroups = {
        "1": [{ id: 13, img: "photo.png", name: "relay" }],
      };
    });

    it("should be visible", () => {
      expect(getLink().exists()).toBe(true);
    });

    it("should have image", () => {
      expect(getLinkImage().attributes("src")).toBe("/images/groups/photo.png");
    });

    it("should have header text", () => {
      expect(getLinkHeaderText().text()).toBe("relay");
    });
  });
});
