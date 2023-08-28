import type { VueWrapper } from "@vue/test-utils";
import { loaded } from "./loaded";
import { SkeletonGroup } from "@/components/SkeletonGroupComponent";
import { Filters } from "@/components/FiltersComponent";
import Pagination from "@/components/PaginationComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";

let wrapper: VueWrapper;

export const testAfterLoad = () => {
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
};
