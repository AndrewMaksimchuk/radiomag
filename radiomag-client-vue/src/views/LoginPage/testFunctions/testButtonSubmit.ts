import { describe, it, expect, beforeEach } from "vitest";
import { buildWrapper } from "./buildWrapper";
import { findComponentButtonSubmit, findComponentsInput } from "./components";

let wrapper = buildWrapper();

beforeEach(() => {
  wrapper = buildWrapper();
});

describe("should have submit button", () => {
  it("should have correct text", () => {
    expect(findComponentButtonSubmit(wrapper).text()).toEqual(
      "login.button.submit"
    );
  });

  it("should be disabled", () => {
    expect(
      findComponentButtonSubmit(wrapper).attributes()["disabled"]
    ).toHaveLength(0);
  });

  it("should be enabled", async () => {
    const inputs = findComponentsInput(wrapper);
    await inputs[0].setValue("3809347054234");
    await inputs[1].setValue("3809347054234");
    expect(
      findComponentButtonSubmit(wrapper).attributes()["disabled"]
    ).toBeUndefined();
  });
});
