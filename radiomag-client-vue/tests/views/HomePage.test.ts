import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { mockStoreI18n } from "tests/mock/mockStoreI18n";
import { i18n } from "@/languages";
import { pinia } from "@/main";
import { isComponentRender } from "tests/isComponentRender";
import HomePage from "@/views/HomePage.vue";
import { CatalogShort } from "@/components/CatalogShortComponent";
import { Linecard } from "@/components/LinecardComponent";
import PopularProducts from "@/components/PopularProductsComponent.vue";
import { NewsShort } from "@/components";
import Manufacturers from "@/components/ManufacturersComponent.vue";
import { Bulletin } from "@/components/BulletinComponent";

mockStoreI18n();

const wrapper = shallowMount(HomePage, {
  global: {
    plugins: [i18n, pinia],
  },
});

describe("Home page", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  isComponentRender(wrapper, CatalogShort, "CatalogShort");
  isComponentRender(wrapper, Linecard, "Linecard");
  isComponentRender(wrapper, PopularProducts, "PopularProducts");
  isComponentRender(wrapper, NewsShort, "NewsShort");
  isComponentRender(wrapper, Manufacturers, "Manufacturers");
  isComponentRender(wrapper, Bulletin, "Bulletin");
});
