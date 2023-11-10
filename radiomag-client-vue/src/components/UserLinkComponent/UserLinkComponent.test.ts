import { nextTick } from "vue";
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, config, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useUser } from "@/store/user";
import UserLink from "./UserLinkComponent.vue";

config.global.config.warnHandler = () => {
  return null;
};

const plugins = [createTestingPinia()];

const mocks = {
  $t: (text: string) => {
    return text;
  },
};

const stubs = {
  RouterLink: RouterLinkStub,
};

const global = {
  plugins,
  stubs,
  mocks,
};

export const buildWrapper = (options = {}) => {
  return shallowMount(UserLink, { global, ...options });
};

const storeUser = useUser();
let wrapper = buildWrapper();

beforeEach(() => {
  wrapper = buildWrapper();
});

describe("UserLink component", () => {
  it("should have image", () => {
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("Should have link to", () => {
    expect(wrapper.findComponent(RouterLinkStub).props().to.name).toEqual(
      "login"
    );
  });

  it("should show login text", () => {
    expect(wrapper.text()).toEqual("header.info.loginRegistration");
  });

  it("should show user name", async () => {
    storeUser.user.name = "Andrew";
    await nextTick();
    expect(wrapper.text()).toEqual("Andrew");
  });
});
