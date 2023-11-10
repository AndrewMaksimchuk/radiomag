import { defineComponent } from "vue";
import { useCatalog } from "@/store/catalog";
import CatalogShortItem from "@/components/CatalogShortItemComponent.vue";
import { ServerNotAvailable } from "@/components/ServerNotAvailableComponent";

export default defineComponent({
  components: {
    CatalogShortItem,
    ServerNotAvailable,
  },
  setup() {
    const store = useCatalog();
    store.useMenu();

    return {
      store,
    };
  },
});
