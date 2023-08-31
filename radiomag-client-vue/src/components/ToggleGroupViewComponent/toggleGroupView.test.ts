import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ToggleGroupView from "./ToggleGroupViewComponent.vue";

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const global = {
  mocks,
};

const options = {
  global,
};

const wrapper = shallowMount(ToggleGroupView, options);

describe("ToggleGroupView component", () => {
  it("should have locale text", () => {
    expect(wrapper.text()).toBe("toggleGroupView.button");
  });

  it("should emit event 'change' with payload", async () => {
    await wrapper.trigger("click");
    const events = wrapper.emitted();
    expect(events).toHaveProperty("change");
    expect(events["change"]).toEqual([[true]]);
  });
});
