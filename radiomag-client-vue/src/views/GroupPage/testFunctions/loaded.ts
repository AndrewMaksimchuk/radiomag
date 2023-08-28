import { createTestingPinia } from "@pinia/testing";
import { buildWrapper, groupId } from "./buildWrapper";
import { i18n } from "@/languages";
import router from "@/router";

export const loaded = () => {
  const testStore = createTestingPinia({
    initialState: {
      group: {
        isLoading: false,
        data: {
          [groupId]: {},
        },
      },
    },
  });

  const testComponent = buildWrapper({
    global: {
      plugins: [i18n, testStore, router],
      mocks: {
        $t: (text: string) => {
          return text;
        },
      },
    },
  });

  return testComponent;
};
