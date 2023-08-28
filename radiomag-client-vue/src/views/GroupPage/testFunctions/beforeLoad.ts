import type { VueWrapper } from "@vue/test-utils";
import { inLoading } from "./inLoading";
import { SkeletonGroup } from "@/components/SkeletonGroupComponent";
import { Filters } from "@/components/FiltersComponent";
import Pagination from "@/components/PaginationComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";

let wrapper: VueWrapper;

export const testBeforeLoad = () => {
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
};
