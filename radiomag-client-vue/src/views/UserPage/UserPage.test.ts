import type { VueWrapper } from "@vue/test-utils";
import { describe, it, beforeEach } from "vitest";
import { i18nValidators } from "tests/mock/i18n-validators";
import { mockUserStore, user } from "@/../tests/mock/mockStoreUser";
import { mockRouter } from "@/../tests/mock/mockRouter";
import { buildWrapper } from "./testFunctions/buildWrapper";
import {
  findButtonLogout,
  findName,
  findTabs,
  findComponentOrderTabWindow,
} from "./testFunctions/find";
import { tabs } from "./scripts/tabs";

i18nValidators();
mockUserStore();
mockRouter();

let wrapper: VueWrapper;

beforeEach(() => {
  wrapper = buildWrapper();
});

describe("User page", () => {
  it("should have greet text", () => {
    expect(findName(wrapper).text()).toContain("userPage.greet");
  });

  it("should have user name", () => {
    expect(findName(wrapper).text()).toContain(user.name);
  });

  it("should have logout button", () => {
    expect(findButtonLogout(wrapper).exists()).toBe(true);
  });

  it("should have tabs", () => {
    const tabElements = findTabs(wrapper);
    expect(tabElements).toHaveLength(tabs.length);

    tabElements.forEach((tab, index) => {
      const { name, label } = tab.props();
      expect(name).toEqual(tabs[index]["name"]);
      expect(label).toEqual(tabs[index]["label"]);
    });
  });

  it("should show 'orders' window by default", () => {
    expect(findComponentOrderTabWindow(wrapper).exists()).toBe(true);
  });
});
