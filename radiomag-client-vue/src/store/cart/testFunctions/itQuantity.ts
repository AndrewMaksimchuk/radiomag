import type { UseCart } from "./buildStore";
import { buildStore } from "./buildStore";
import { cartData } from "./cartData";
import { findItem } from "./findItem";

let store: ReturnType<UseCart>;

beforeEach(() => {
  store = buildStore();
});

export const itQuantity = () => {
  it("should be change quantity", () => {
    store.add(cartData);
    const changeData = { code: 32406, quantity: 35 };
    store.changeQuantity(changeData);
    const item = findItem(store.cart);
    expect(item?.quantity).toEqual(changeData.quantity);
  });

  it("should be can`t change quantity", () => {
    store.add(cartData);
    const changeData = { code: 3240, quantity: 35 };
    store.changeQuantity(changeData);
    const item = findItem(store.cart);
    expect(item?.quantity).toEqual(cartData.quantity);
  });
};
