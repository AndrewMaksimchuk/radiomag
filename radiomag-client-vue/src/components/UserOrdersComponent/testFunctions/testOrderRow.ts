import type { BuildWrapper } from "./buildWrapper";
import { describe, it, expect } from "vitest";
import { ordersStore } from "./mockOrdersStore";

export const testOrderRow = (wrapper: BuildWrapper) => {
  const findRowCells = () => {
    return wrapper.findAll("td");
  };

  describe("Order row", () => {
    it("should have order number(id)", () => {
      expect(findRowCells()[0].text()).toEqual(ordersStore.orders[0].id);
    });

    it("should have created date", () => {
      expect(findRowCells()[1].text()).toEqual(ordersStore.orders[0].created);
    });

    it("should have total cost", () => {
      expect(findRowCells()[4].text()).toEqual(ordersStore.orders[0].totalCost);
    });

    it("should have manager", () => {
      expect(findRowCells()[5].text()).toEqual(ordersStore.orders[0].manager);
    });

    it("should have status", () => {
      expect(findRowCells()[6].text()).toEqual(ordersStore.orders[0].status);
    });
  });
};
