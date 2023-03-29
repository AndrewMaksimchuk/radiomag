import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { CartItem, useCart } from "@/store/cart";

let store: ReturnType<typeof useCart>;

const buildStore = () => {
  setActivePinia(createPinia());
  store = useCart();
  store.clear();
};

const cartData: CartItem = {
  product: {
    id: 32406,
    articul: "",
    datasheet_link_data: "",
    description: [],
    extended_description: false,
    google_category_id: "",
    image: "",
    initialPosition: 0,
    moq: null,
    pcs: "",
    prices: [],
    product_analogs_types: null,
    remaining_images_qty: 1,
    stock_data: [],
    total: 5,
    total_stock: "",
    url: "",
    waiting_date_items: null,
    waiting_total: 0,
  },
  quantity: 5,
};

const findItem = () => {
  return store.cart.find((item) => item.product.id === cartData.product.id);
};

describe("Cart store", () => {
  beforeEach(() => {
    buildStore();
  });

  it("should be empty", () => {
    expect(store.length).toEqual(0);
  });

  it("should add item", () => {
    store.add(cartData);
    expect(store.length).toEqual(1);
    expect(store.cart.at(0)).toEqual(cartData);
  });

  it("should remove item", () => {
    store.add(cartData);
    store.remove(0);
    expect(store.length).toEqual(0);
  });

  it("should be change quantity", () => {
    store.add(cartData);
    const changeData = { code: 32406, quantity: 35 };
    store.changeQuantity(changeData);
    const item = findItem();
    expect(item?.quantity).toEqual(changeData.quantity);
  });

  it("should be can`t change quantity", () => {
    store.add(cartData);
    const changeData = { code: 3240, quantity: 35 };
    store.changeQuantity(changeData);
    const item = findItem();
    expect(item?.quantity).toEqual(changeData.quantity);
  });

  describe("should load localStorage", () => {
    it("should be empty", () => {
      store.loadLocalStorage();
      expect(store.length).toBe(0);
    });

    it("should have data", () => {
      store.add(cartData);
      store.loadLocalStorage();
      expect(store.length).toBeGreaterThan(0);
      expect(store.cart.at(0)).toEqual(cartData);
    });
  });
});
