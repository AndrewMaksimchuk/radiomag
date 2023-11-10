import { describe, it, expect, beforeEach } from "vitest";
import { buildWrapper } from "./buildWrapper";
import { findComponentsFormItem } from "./components";

let wrapper = buildWrapper();

beforeEach(() => {
  wrapper = buildWrapper();
});

describe("LoginPage component", () => {
  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have FormItem components with correct label", () => {
    const components = findComponentsFormItem(wrapper);
    expect(components[0].text()).toEqual("login.label.phone0 / 13");
    expect(components[1].text()).toEqual("login.label.password");
  });
});
