import type { VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { useMock } from "./testFunctions/mock";
import { buildWrapper } from "./testFunctions/buildWrapper";
import product from "../../../tests/mock/workerProduct.json";
import { findComponent, findLink, findSections } from "./testFunctions/find";

let wrapper: VueWrapper;

useMock();

beforeEach(() => {
  wrapper = buildWrapper();
});

describe("CardTable component", () => {
  it("should have image component with attributes", () => {
    const component = findComponent(wrapper);
    const attrs = component.attributes();
    expect(component.isVisible()).toBe(true);
    expect(attrs["img"]).toContain(product.image);
    expect(attrs["alt"]).toContain(product.description[0]);
  });

  it("shold have link", async () => {
    const link = findLink(wrapper);
    expect(link.text()).toEqual(product.articul);
  });

  it("should have sections of data with title attribute", () => {
    const sections = findSections(wrapper);
    expect(sections.length).toBeGreaterThan(0);
    sections.forEach((section) => {
      expect(section.attributes()["title"].length).toBeGreaterThan(0);
    });
  });
});
