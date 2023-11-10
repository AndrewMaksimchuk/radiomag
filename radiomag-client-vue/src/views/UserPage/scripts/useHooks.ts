import type { RouteLocationNormalizedLoaded, Router } from "vue-router";
import type { TabName } from "./tabs";
import type { Ref } from "vue";
import { onBeforeMount } from "vue";

export const useHooks = (
  router: Router,
  route: RouteLocationNormalizedLoaded,
  activeTab: Ref<TabName>
) => {
  onBeforeMount(() => {
    const windowParam = route.query["window"];
    if (!Array.isArray(windowParam) && windowParam) {
      return (activeTab.value = windowParam as TabName);
    }

    router.push({
      name: "user",
      query: {
        window: activeTab.value,
      },
    });
  });
};
