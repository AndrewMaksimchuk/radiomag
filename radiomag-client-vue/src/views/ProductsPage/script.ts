import { defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCatalog } from "@/store/catalog";
import { PingService } from "@/services/PingService";
import { ServerNotAvailable } from "@/components/ServerNotAvailableComponent";

export default defineComponent({
  components: {
    ServerNotAvailable,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useCatalog();
    store.useAllMenuGroups();

    onMounted(() => {
      const breadcrumbsUpdate = {
        name: document.title,
        path: route.fullPath,
      };
      route.meta.breadcrumbs?.set(breadcrumbsUpdate);
    });

    return { router, store, PingService };
  },
});
