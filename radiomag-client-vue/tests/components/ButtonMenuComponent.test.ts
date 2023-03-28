import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import ButtonMenu from "@/components/ButtonMenuComponent.vue";

let wrapper: VueWrapper;

const buildWrapper = () => (wrapper = shallowMount(ButtonMenu));

describe("ButtonMenu component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be close", () => {
    expect(wrapper.attributes("data-state")).toBe("close");
  });

  it("should be open", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.attributes("data-state")).toBe("open");
  });

  describe("should emit event 'change'", () => {
    it("should be 'open'", async () => {
      await wrapper.find("button").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([["open"]]);
    });

    it("should be 'close'", async () => {
      await wrapper.find("button").trigger("click");
      await wrapper.find("button").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([["open"], ["close"]]);
    });
  });
});
