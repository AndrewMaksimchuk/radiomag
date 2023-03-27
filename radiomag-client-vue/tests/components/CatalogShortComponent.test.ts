import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, MountingOptions, VueWrapper } from "@vue/test-utils";
import CatalogShortComponent from "@/components/CatalogShortComponent.vue";
import { createTestingPinia } from "@pinia/testing";
import { useCatalog } from "@/store/catalog";
import CatalogShortItem from "@/components/CatalogShortItem.vue";

let wrapper: VueWrapper;

const global = {
  plugins: [createTestingPinia()],
  mocks: {
    $t: (text: string) => text,
  },
};

const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  wrapper = shallowMount(CatalogShortComponent, { global, ...options });
};

const store = useCatalog();

const getHeader = () => wrapper.find("h2");
const getItems = () => wrapper.findAllComponents(CatalogShortItem);

const catalogLength = 5;

beforeEach(() => {
  buildWrapper();
});

describe("CatalogShort component", () => {
  it("should be hidden", () => {
    expect(wrapper.isVisible()).toBe(false);
  });

  describe("should be visible", () => {
    beforeEach(() => {
      store.catalog.length = catalogLength;
      buildWrapper();
    });

    it("should have header", () => {
      expect(getHeader().isVisible()).toBe(true);
    });

    it("should have list of items", () => {
      expect(getItems()).toHaveLength(catalogLength);
    });
  });
});
