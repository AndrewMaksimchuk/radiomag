import type { UseCart } from "./testFunctions/buildStore";
import { describe, it, expect, beforeEach } from "vitest";
import { buildStore } from "./testFunctions/buildStore";
import { cartData } from "./testFunctions/cartData";
import { itLoadLocalStorage } from "./testFunctions/itLoadLocalStorage";
import workerProduct from "@/../tests/mock/workerProduct.json";
import { itQuantity } from "./testFunctions/itQuantity";

let store: ReturnType<UseCart>;

beforeEach(() => {
  store = buildStore();
});

describe("Cart store", () => {
  it("should be empty", () => {
    expect(store.length).toEqual(0);
  });

  it("should add item", () => {
    store.add(cartData);
    expect(store.length).toEqual(1);
    expect(store.cart.at(0)).toEqual(cartData);
  });

  it("should have one item of the same added goods", () => {
    store.add(cartData);
    store.add(cartData);
    expect(store.length).toEqual(1);
    expect(store.cart.at(0)?.quantity).toEqual(cartData.quantity * 2);
  });

  it("should remove item", () => {
    store.add(cartData);
    store.remove(0);
    expect(store.length).toEqual(0);
  });

  itQuantity();
  itLoadLocalStorage();

  it("shoud have total cost 0.00", () => {
    expect(store.totalCost).toBe("0.00");
  });

  it("should have total cost 3250.00", () => {
    store.add({ quantity: 5, product: workerProduct });
    expect(store.totalCost).toBe("3250.00");
  });
});
