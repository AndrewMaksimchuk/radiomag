import { describe, it, expect, beforeEach } from "vitest";
import { buildWrapper } from "./buildWrapper";
import { findComponentsInput } from "./components";

let wrapper = buildWrapper();

beforeEach(() => {
  wrapper = buildWrapper();
});

describe("should have input fields", () => {
  it("should have 3 fields", () => {
    expect(findComponentsInput(wrapper).length).toEqual(3);
  });

  it("should have phone number field", () => {
    const inputs = findComponentsInput(wrapper);
    const attrs = inputs[0].find("input").attributes();
    expect(attrs["inputmode"]).toEqual("tel");
    expect(attrs["name"]).toEqual("phone");
    expect(attrs["type"]).toEqual("text");
    expect(attrs["placeholder"]).toEqual("380675346713");
  });

  it("should have password field", () => {
    const inputs = findComponentsInput(wrapper);
    const attrs = inputs[1].find("input").attributes();
    expect(attrs["inputmode"]).toEqual("text");
    expect(attrs["name"]).toEqual("password");
    expect(attrs["type"]).toEqual("password");
    expect(attrs["placeholder"]).toEqual("s$G32dfn238e");
  });

  it("should have name field", () => {
    const inputs = findComponentsInput(wrapper);
    const attrs = inputs[2].find("input").attributes();
    expect(attrs["inputmode"]).toEqual("text");
    expect(attrs["name"]).toEqual("name");
    expect(attrs["type"]).toEqual("text");
    expect(attrs["placeholder"]).toEqual("Andrew");
  });
});
