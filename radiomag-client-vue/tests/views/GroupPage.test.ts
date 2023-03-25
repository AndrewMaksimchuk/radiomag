import { describe, it, expect, vi } from "vitest";
import { MountingOptions, shallowMount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia, TestingPinia } from "@pinia/testing";
import { i18n } from "@/languages";
import router from "@/router";
import GroupPage from "@/views/GroupPage.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Pagination from "@/components/PaginationComponent.vue";
import Filters from "@/components/FiltersComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";

const buildWrapper = (
  options: MountingOptions<Record<string, unknown>> = {}
) => {
  return shallowMount(GroupPage, options);
};

const groupId = 311;

router.push({ path: `/group/${groupId}`, query: { page: 1 } });
await router.isReady();

vi.stubGlobal("scrollTo", () => true);
vi.stubGlobal("$t", (message: string) => message);

let testPinia: TestingPinia;
let wrapper: VueWrapper;

describe("Group page", () => {
  describe("should be data in loading", () => {
    beforeEach(() => {
      testPinia = createTestingPinia({
        initialState: {
          group: {
            isLoading: true,
            data: {
              [groupId]: {},
            },
          },
        },
      });

      wrapper = buildWrapper({
        global: {
          plugins: [i18n, testPinia, router],
          mocks: {
            $t: (text: string) => text,
          },
        },
      });
    });

    it("should loader displayed", () => {
      expect(wrapper.findComponent(SpinnerLoader).exists()).toBe(true);
    });

    it("should component Pagination hidden", () => {
      expect(wrapper.findComponent(Pagination).exists()).toBe(false);
    });

    it("should component Filters hidden", () => {
      expect(wrapper.findComponent(Filters).exists()).toBe(false);
    });

    it("should component ErrorMessageInGroup hidden", () => {
      expect(wrapper.findComponent(ErrorMessageInGroup).exists()).toBe(false);
    });
  });

  describe("should be data is loaded", () => {
    beforeEach(() => {
      testPinia = createTestingPinia({
        initialState: {
          group: {
            isLoading: false,
            data: {
              "311": {},
            },
          },
        },
      });

      wrapper = buildWrapper({
        global: {
          plugins: [i18n, testPinia, router],
          mocks: {
            $t: (text: string) => text,
          },
        },
      });
    });

    it("should loader hidden", () => {
      expect(wrapper.findComponent(SpinnerLoader).exists()).toBe(false);
    });

    it("should component Pagination visible", () => {
      expect(wrapper.findComponent(Pagination).exists()).toBe(true);
    });

    it("should component Filters visible", () => {
      expect(wrapper.findComponent(Filters).exists()).toBe(true);
    });

    it("should component ErrorMessageInGroup visible", () => {
      expect(wrapper.findComponent(ErrorMessageInGroup).exists()).toBe(true);
    });
  });
});
