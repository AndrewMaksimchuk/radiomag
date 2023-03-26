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

const findHeader = () => wrapper.find("h2");
const findForm = () => wrapper.find("form");
const findLable = () => wrapper.find("label");
const findInput = () => wrapper.find("input");
const findButton = () => wrapper.find("button");

describe("Bulletin component", () => {
  it("should be displayed", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header element", () => {
    expect(findHeader().isVisible()).toBe(true);
  });

  it("should have form element", () => {
    expect(findForm().isVisible()).toBe(true);
  });

  it("should have label element", () => {
    expect(findLable().isVisible()).toBe(true);
  });

  it("should have input element", () => {
    expect(findInput().isVisible()).toBe(true);
  });

  it("should have button element", () => {
    expect(findButton().isVisible()).toBe(true);
  });
});
