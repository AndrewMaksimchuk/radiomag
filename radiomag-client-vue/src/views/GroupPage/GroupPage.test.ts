import { describe, vi } from "vitest";
import { testBeforeLoad } from "./testFunctions/beforeLoad";
import { testAfterLoad } from "./testFunctions/afterLoad";

vi.stubGlobal("scrollTo", () => {
  return true;
});

vi.stubGlobal("$t", (message: string) => {
  return message;
});

describe("Group page", () => {
  describe("should be data in loading", testBeforeLoad);
  describe("should be data is loaded", testAfterLoad);
});
