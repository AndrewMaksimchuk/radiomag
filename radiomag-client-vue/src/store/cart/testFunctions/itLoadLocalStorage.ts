import type { UseCart } from "./buildStore";
import { buildStore } from "./buildStore";
import { cartData } from "./cartData";

let store: ReturnType<UseCart>;

beforeEach(() => {
  store = buildStore();
});

export const itLoadLocalStorage = () => {
  return describe("should load localStorage", () => {
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
};
