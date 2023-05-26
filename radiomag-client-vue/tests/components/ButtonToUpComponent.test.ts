import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import ButtonToUp from "@/components/ButtonToUpComponent.vue";

let wrapper: VueWrapper;

const buildWrapper = () =>
  (wrapper = shallowMount(ButtonToUp, {
    global: {
      mocks: {
        $t: (text: string) => text,
      },
    },
  }));

describe("ButtonToUp component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});
