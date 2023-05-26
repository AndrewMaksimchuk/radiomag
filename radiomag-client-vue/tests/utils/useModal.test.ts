import { describe, it, expect } from "vitest";
import { useModal, className } from "@/utils/useModal";

const getClass = () => document.documentElement.classList.contains(className);

describe("Toggle css class with overflow property", () => {
  it("should set class", () => {
    useModal();
    expect(getClass()).toBe(true);
  });

  it("should unset class", () => {
    useModal();
    expect(getClass()).toBe(false);
  });
});
