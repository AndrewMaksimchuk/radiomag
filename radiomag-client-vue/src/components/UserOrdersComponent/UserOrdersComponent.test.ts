import { describe, it, expect, beforeEach } from "vitest";
import { mockOrdersStore } from "tests/mock/mockStoreOrders";
import { buildWrapper } from "./testFunctions/buildWrapper";
import { testTableHeaders } from "./testFunctions/tableHeaders";
import { testFormColumn } from "./testFunctions/testFormColumn";
import { testGoodsColumn } from "./testFunctions/testGoodsColumn";
import { testOrderRow } from "./testFunctions/testOrderRow";

mockOrdersStore();
let wrapper = buildWrapper();

const findTableColumns = () => {
  return wrapper.findAll("td");
};

beforeEach(() => {
  wrapper = buildWrapper();
});

describe("User orders component", () => {
  it("Should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  testTableHeaders(wrapper);
  testFormColumn(findTableColumns, wrapper);
  testGoodsColumn(findTableColumns, wrapper);
  testOrderRow(wrapper);
});
