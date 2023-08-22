import { defineComponent, onBeforeMount } from "vue";
import { useCatalog } from "@/store/catalog";
import { ServerNotAvailable } from "@/components/ServerNotAvailableComponent";

export default defineComponent({
  components: {
    ServerNotAvailable,
  },
  setup() {
    const store = useCatalog();
    onBeforeMount(() => {
      return store.useMenu();
    });
    return {
      store,
    };
  },
});
