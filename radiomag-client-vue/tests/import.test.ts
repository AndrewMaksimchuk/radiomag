import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, it, expect } from "vitest";
import { i18nValidators } from "./mock/i18n-validators";

i18nValidators();

const toComponents = join(process.cwd(), "src", "components");
const components = readdirSync(toComponents).map((cmp) =>
  join(toComponents, cmp)
);

const toPages = join(process.cwd(), "src", "views");
const pages = readdirSync(toPages).map((page) => join(toPages, page));

describe("Corect import component", () => {
  components.forEach(async (element) => {
    it(`normal with dependencies in ${element}`, async () => {
      const cmp = await import(element);
      expect(cmp).toBeDefined();
    });
  });
});

describe("Corect import page", () => {
  pages.forEach(async (page) => {
    it(`normal with dependencies in ${page}`, async () => {
      const cmp = await import(page);
      expect(cmp).toBeDefined();
    });
  });
});
