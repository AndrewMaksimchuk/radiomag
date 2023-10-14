import type { TabsPaneContext } from "element-plus";
import type { TabName } from "./scripts/tabs";
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUser } from "@/store/user";
import { components } from "./scripts/components";
import { tabs } from "./scripts/tabs";
import { PingService } from "@/services/PingService";
import { useHooks } from "./scripts/useHooks";

export default defineComponent({
  components,
  setup() {
    const userStore = useUser();
    const router = useRouter();
    const route = useRoute();
    const activeTab = ref<TabName>("orders");

    useHooks(router, route, activeTab);

    watch(activeTab, (value) => {
      router.push({
        name: "user",
        query: {
          window: value,
        },
      });
    });

    const handleTabClick = (tab: TabsPaneContext) => {
      const { index } = tab;
      if (undefined === index) {
        return;
      }

      PingService.ping({
        action: "open window",
        window: tabs[Number(index)]["component"],
      });
    };

    const onLogout = () => {
      userStore.clear();
      router.push({
        name: "home",
      });
    };

    return {
      userStore,
      onLogout,
      tabs,
      activeTab,
      handleTabClick,
    };
  },
});
