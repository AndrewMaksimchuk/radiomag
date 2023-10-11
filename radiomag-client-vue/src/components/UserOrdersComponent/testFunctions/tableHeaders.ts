import type { VueWrapper } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

export const testTableHeaders = (wrapper: VueWrapper) => {
  const tableHeaders = () => {
    return wrapper.findAll("th");
  };

  return describe("Should have table headers", () => {
    it("Order number", () => {
      expect(tableHeaders()[0].text()).toContain(
        "orders.window.orders.tableHeaderLabels.number"
      );
    });

    it("Order date", () => {
      expect(tableHeaders()[1].text()).toContain(
        "orders.window.orders.tableHeaderLabels.date"
      );
    });

    it("Order form", () => {
      expect(tableHeaders()[2].text()).toContain(
        "orders.window.orders.tableHeaderLabels.form"
      );
    });

    it("Order goods", () => {
      expect(tableHeaders()[3].text()).toContain(
        "orders.window.orders.tableHeaderLabels.goods"
      );
    });

    it("Order cost", () => {
      expect(tableHeaders()[4].text()).toContain(
        "orders.window.orders.tableHeaderLabels.cost"
      );
    });

    it("Order manager", () => {
      expect(tableHeaders()[5].text()).toContain(
        "orders.window.orders.tableHeaderLabels.manager"
      );
    });

    it("Order status", () => {
      expect(tableHeaders()[6].text()).toContain(
        "orders.window.orders.tableHeaderLabels.status"
      );
    });
  });
};
