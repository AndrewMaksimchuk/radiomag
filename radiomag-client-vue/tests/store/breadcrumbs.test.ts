import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useBreadcrumbs } from "@/store/breadcrumbs";

let store: ReturnType<typeof useBreadcrumbs>;

const buildStore = () => {
  setActivePinia(createPinia());
  store = useBreadcrumbs();
  store.reset();
};

// const findItem = () => {
//   return store.cart.find((item) => item.product.id === cartData.product.id);
// };

describe("Breadcrumbs store", () => {
  beforeEach(() => {
    buildStore();
  });

  it("should be empty", () => {
    expect(store.length).toEqual(0);
  });

  it("should add one item", () => {
    store.add({ name: "test", path: "/test" });
    expect(store.length).toBe(1);
  });

  it("should do not find index", () => {
    expect(store.findIndex("/test")).toBe(-1);
  });

  it("should find index", () => {
    store.add({ name: "test", path: "/test" });
    expect(store.findIndex("/test")).toBe(0);
  });

  it("should have less length", () => {
    store.add({ name: "test-1", path: "/test-1" });
    store.add({ name: "test-2", path: "/test-2" });
    store.add({ name: "test-3", path: "/test-3" });
    store.update(1);
    expect(store.length).toBe(1);
  });

  it("should opdate one item", () => {
    const updatedValue = { name: "products", path: "/products" };
    store.add({ name: "test", path: "/test" });
    store.updateOne("/test", updatedValue);
    expect(store.breadcrumbs[0]).toEqual(updatedValue);
  });
});
