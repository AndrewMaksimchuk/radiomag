import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ContactPhoneComponent from "@/components/ContactPhoneComponent.vue";

const wrapper = shallowMount(ContactPhoneComponent);

const findLink = () => wrapper.find("a");
const findImage = () => wrapper.find("img");

describe("ContactPhone component", () => {
  it("should be visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  it("should have link", () => {
    expect(findLink().isVisible()).toBeTruthy();
  });

  it("should have image", () => {
    expect(findImage().isVisible()).toBeTruthy();
  });
});
