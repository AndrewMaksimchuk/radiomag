import { describe, it, expect, beforeEach } from "vitest";
import {
  shallowMount,
  VueWrapper,
  RouterLinkStub,
  config,
} from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import CardLineDescription from "@/components/CardLineDescriptionComponent.vue";

config.global.config.warnHandler = () => null;

let wrapper: VueWrapper;

const mocks = {
  $t: (text: string) => text,
};

const stubs = {
  RouterLink: RouterLinkStub,
};

const global = {
  plugins: [createTestingPinia()],
  mocks,
  stubs,
};

const product = {
  id: 43216,
  articul: "EMR221M16B",
  url: "/product/220uf-16v-emr-8x7mm-emr221m16b_43216.html",
  description: [
    "220uF 16V EMR 8x7mm (EMR221M16B)",
    "16",
    "1602",
    "12315",
    "23653",
    "98573",
    "23861",
    "0",
    "0",
    "0",
    "0",
  ],
  image: "/modules/Asers_Shop/images/productimages/emrhitanocapimage.jpg",
  remaining_images_qty: 0,
  datasheet_link_data: "datasheets/EMR_080514.pdf",
  extended_description: false,
  pcs: "\u0448\u0442",
  total_stock: 20906,
  prices: [
    {
      q: 7,
      p: 3,
      disabled: false,
    },
    {
      q: 10,
      p: 2.5,
      disabled: false,
    },
    {
      q: 100,
      p: 2,
      disabled: false,
    },
    {
      q: 1000,
      p: 1.6,
      disabled: false,
    },
  ],
  show_price: true,
  moq: 7,
  google_category_id: "3220",
  initialPosition: 0,
  product_analogs_types: null,
  total: 20906,
  stock_data: [{ stock: "", stockName: "" }],
  waiting_date_items: null,
  waiting_total: 0,
};

const props = {
  product,
  filterHeaders: [],
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(CardLineDescription, {
    global,
    ...options,
  });
};

const getHeader = () => wrapper.find("h3");
const getLinkToGoods = () => wrapper.find(".common-link");
const getDescription = () =>
  wrapper.find(".card-line__center-description-main-text");
const getLinkToSpecification = () =>
  wrapper.find(".card-line__center-description-tech-info-link");

describe("CardLineDescription component", () => {
  beforeEach(() => {
    buildWrapper({ props });
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header text", () => {
    expect(getHeader().text()).toBe(product.description.at(0));
  });

  describe("should have link", () => {
    it("should be visible", () => {
      expect(getLinkToGoods().isVisible()).toBe(true);
    });

    it("should be with code", () => {
      expect(getLinkToGoods().text()).toContain(product.id);
    });
  });

  it("should have description", () => {
    expect(getDescription().text()).toBeTruthy();
  });

  it("should have link to specification", () => {
    expect(getLinkToSpecification().exists()).toBe(true);
    const link =
      "https://www.rcscomponents.kiev.ua/" + product.datasheet_link_data;
    expect(getLinkToSpecification().attributes("href")).toBe(link);
  });

  it("should dosn`t have link to specification", () => {
    props.product.datasheet_link_data = "";
    buildWrapper({ props });
    expect(getLinkToSpecification().exists()).toBe(false);
  });
});
