import { createTestingPinia } from "@pinia/testing";
import { buildWrapper, groupId } from "./buildWrapper";
import { i18n } from "@/languages";
import router from "@/router";

export const inLoading = async () => {
  const testStore = createTestingPinia({
    initialState: {
      group: {
        isLoading: true,
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

  router.push({ path: `/group/${groupId}`, query: { page: 1 } });
  await router.isReady();

  return testComponent;
};
