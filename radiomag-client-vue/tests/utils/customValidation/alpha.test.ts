import { describe, it, expect } from "vitest";
import { customAlpha } from "@/utils/customValidation/alpha";

const numbers = "0123456789";
const symbols = "`~!@#$%^&*()_-=+\\|/.,<>;'\"";
const textCyrillic = "йцукенгшщзхїфівапролджєячсмитьбю";
const textLatine = "qwertyuiopasdfghjklzxcvbnm";

describe("Custom validation function - alpha", () => {
  it("Should not have numbers", () => {
    expect(customAlpha(numbers)).toBe(false);
  });

  it("should not have special symbol", () => {
    expect(customAlpha(symbols)).toBe(false);
  });

  it("should accept cyrillic letters", () => {
    expect(customAlpha(textCyrillic)).toBe(true);
    expect(customAlpha(textCyrillic.toUpperCase())).toBe(true);
  });

  it("should accept latine letters", () => {
    expect(customAlpha(textLatine)).toBe(true);
    expect(customAlpha(textLatine.toUpperCase())).toBe(true);
  });
});
