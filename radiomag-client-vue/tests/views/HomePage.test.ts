import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { i18n } from "@/languages";
import { pinia } from "@/main";
import { isComponentRender } from "tests/isComponentRender";
import HomePage from "@/views/HomePage.vue";
import CatalogShort from "@/components/CatalogShortComponent.vue";
import Linecard from "@/components/LinecardComponent.vue";
import PopularProducts from "@/components/PopularProductsComponent.vue";
import NewsShort from "@/components/NewsShortComponent.vue";
import Manufacturers from "@/components/ManufacturersComponent.vue";
import Bulletin from "@/components/BulletinComponent.vue";

const wrapper = mount(HomePage, {
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
