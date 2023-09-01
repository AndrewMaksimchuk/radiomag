import { describe, it, expect, beforeAll } from "vitest";
import { RouterLinkStub } from "@vue/test-utils";
import { useCatalog } from "@/store/catalog";
import { buildWrapper } from "./testFunctions/buildWrapper";

const wrapper = buildWrapper();
const store = useCatalog();

const getLink = () => {
  return wrapper.findComponent(RouterLinkStub);
};

const getLinkImage = () => {
  return wrapper.find(".products__item-group-img");
};

const getLinkHeaderText = () => {
  return wrapper.find(".products__item-group-name");
};

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