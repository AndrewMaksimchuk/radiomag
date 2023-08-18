import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Spinner from "./SpinnerLoader.vue";

const wrapper = shallowMount(Spinner, {
  props: {
    isVisible: true,
  },
});

describe("Spinner component", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should be hidden", async () => {
    await wrapper.setProps({ isVisible: false });
    expect(wrapper.isVisible()).toBe(false);
  });
});
