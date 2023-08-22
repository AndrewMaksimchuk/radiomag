import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, MountingOptions, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useCatalog } from "@/store/catalog";
import CatalogShort from "./CatalogShortComponent.vue";
import CatalogShortItem from "@/components/CatalogShortItemComponent.vue";

let wrapper: VueWrapper;

const global = {
  plugins: [createTestingPinia()],
  mocks: {
    $t: (text: string) => {
      return text;
    },
  },
};

const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  wrapper = shallowMount(CatalogShort, { global, ...options });
};

const store = useCatalog();

const getHeader = () => {
  return wrapper.find("h2");
};

const getItems = () => {
  return wrapper.findAllComponents(CatalogShortItem);
};

const catalogLength = 5;

beforeEach(() => {
  buildWrapper();
});

describe("CatalogShort component", () => {
  beforeEach(() => {
    store.catalog.length = catalogLength;
    buildWrapper();
  });

  it("should be hidden", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header", () => {
    expect(getHeader().isVisible()).toBe(true);
  });

  it("should have list of items", () => {
    expect(getItems()).toHaveLength(catalogLength);
  });
});
