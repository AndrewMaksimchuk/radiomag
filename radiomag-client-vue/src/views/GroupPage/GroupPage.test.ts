import type { VueWrapper } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { inLoading } from "./testFunctions/inLoading";
import { loaded } from "./testFunctions/loaded";
import { SkeletonGroup } from "@/components/SkeletonGroupComponent";
import Pagination from "@/components/PaginationComponent.vue";
import Filters from "@/components/FiltersComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";

let wrapper: VueWrapper;
vi.stubGlobal("scrollTo", () => {
  return true;
});
vi.stubGlobal("$t", (message: string) => {
  return message;
});

describe("Group page", () => {
  describe("should be data in loading", () => {
    beforeEach(async () => {
      wrapper = await inLoading();
    });

    it("should loader displayed", () => {
      expect(wrapper.findComponent(SkeletonGroup).exists()).toBe(true);
    });

    it("should component Pagination hidden", () => {
      expect(wrapper.findComponent(Pagination).exists()).toBe(false);
    });

    it("should component Filters hidden", () => {
      expect(wrapper.findComponent(Filters).exists()).toBe(false);
    });

    it("should component ErrorMessageInGroup hidden", () => {
      expect(wrapper.findComponent(ErrorMessageInGroup).exists()).toBe(false);
    });
  });

  describe("should be data is loaded", () => {
    beforeEach(() => {
      wrapper = loaded();
    });

    it("should loader hidden", () => {
      expect(wrapper.findComponent(SkeletonGroup).exists()).toBe(false);
    });

    it("should component Pagination visible", () => {
      expect(wrapper.findComponent(Pagination).exists()).toBe(true);
    });

    it("should component Filters visible", () => {
      expect(wrapper.findComponent(Filters).exists()).toBe(true);
    });

    it("should component ErrorMessageInGroup visible", () => {
      expect(wrapper.findComponent(ErrorMessageInGroup).exists()).toBe(true);
    });
  });
});
