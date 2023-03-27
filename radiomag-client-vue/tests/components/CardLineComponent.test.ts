import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import CardLine from "@/components/CardLineComponent.vue";
import CardLineImage from "@/components/CardLineImageComponent.vue";
import CardLineDescription from "@/components/CardLineDescriptionComponent.vue";
import ProductAvailability from "@/components/ProductAvailability.vue";
import ProductPrice from "@/components/ProductPrice.vue";
import QuantitySelectionForm from "@/components/QuantitySelectionFormComponent.vue";

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

let wrapper: VueWrapper;

const buildWrapper = () => {
  wrapper = shallowMount(CardLine, {
    global: {
      plugins: [createTestingPinia()],
      mocks: {
        $t: (text: string) => text,
      },
    },
    props: {
      product,
      filterHeaders: [],
    },
  });
};

describe("CardLine component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have image", () => {
    expect(wrapper.findComponent(CardLineImage).exists()).toBe(true);
  });

  it("should have description", () => {
    expect(wrapper.findComponent(CardLineDescription).exists()).toBe(true);
  });

  it("should have data about availaility", () => {
    expect(wrapper.findComponent(ProductAvailability).exists()).toBe(true);
  });

  it("should have data about price", () => {
    expect(wrapper.findComponent(ProductPrice).exists()).toBe(true);
  });

  it("should have form of select and add", () => {
    expect(wrapper.findComponent(QuantitySelectionForm).exists()).toBe(true);
  });
});
