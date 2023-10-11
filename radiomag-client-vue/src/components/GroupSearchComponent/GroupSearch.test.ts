import { describe, it, afterEach } from "vitest";
import { mockStoreI18n } from "tests/mock/mockStoreI18n";
import { vueToastification } from "tests/mock/vue-toastification";
import { testButton } from "./testFunctions/button";
import { testCounter } from "./testFunctions/counter";
import { testInput } from "./testFunctions/input";
import { testIcon } from "./testFunctions/icon";
import { useAfterEach } from "./testFunctions/afterEach";
import { testWrapper } from "./testFunctions/wrapper";

mockStoreI18n();
vueToastification();
afterEach(useAfterEach);

describe("Bulletin component", () => {
  it("should be displayed", testWrapper);
  it("should have icon", testIcon);
  it("should have input", testInput);
  it("should have counter", testCounter);
  it("should have button", testButton);
});
