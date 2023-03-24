import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Bulletin from "@/components/BulletinComponent.vue";

const wrapper = shallowMount(Bulletin, {
  global: {
    mocks: {
      $t: (text: string) => text,
    },
  },
});

describe("Bulletin component", () => {
  it("should be displayed", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
