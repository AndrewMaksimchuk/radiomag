import type { TabsPaneContext } from "element-plus";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "@/store/user";
import { components } from "./scripts/components";
import { tabs } from "./scripts/tabs";
import { PingService } from "@/services/PingService";

export default defineComponent({
  components,
  setup() {
    const userStore = useUser();
    const router = useRouter();
    const activeTab = ref("orders");

    const handleClick = (tab: TabsPaneContext) => {
      const { index } = tab;
      if (undefined === index) {
        return;
      }

      PingService.ping({
        userRole: userStore.user.role,
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
      handleClick,
    };
  },
});
