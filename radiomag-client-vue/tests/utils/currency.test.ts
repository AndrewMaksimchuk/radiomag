import { describe, it, expect, beforeEach } from "vitest";
import * as currency from "@/utils/currency";
import group from "../mock/kits_group.json";

describe("Currency util", () => {
  beforeEach(() => window.localStorage.clear());

  it("should have default value", () => {
    expect(currency.getCurrency()).toEqual(currency.defaultCurrency);
  });

  it("should set new value", () => {
    const useCurrency = "usd";
    group.currency = useCurrency;
    currency.setCurrency(group);
    expect(currency.getCurrency()).toEqual(useCurrency);
  });
});
