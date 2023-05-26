import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import OrderContactFormFieldsetComment from "@/components/OrderContactFormFieldsetCommentComponent.vue";

let wrapper: VueWrapper;

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => text,
};

const global = {
  plugins,
  mocks,
};

const buildWrapper = (options = {}) => {
  wrapper = shallowMount(OrderContactFormFieldsetComment, {
    global,
    ...options,
  });
};

const findHeader = () => wrapper.find("h3");
const findTextarea = () => wrapper.find("textarea");

describe("OrderContactFormFieldsetComment component", () => {
  beforeEach(() => {
    buildWrapper();
  });

  it("should be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("should have header", () => {
    const i18nKeyText = "order.form.comment";
    expect(findHeader().text()).toEqual(i18nKeyText);
  });

  it("should have textarea field", () => {
    const field = findTextarea();
    expect(field.isVisible()).toBe(true);
    expect(field.attributes()["name"]).toEqual("comment");
  });
});
