import { defineComponent } from "vue";
import { useBreadcrumbs } from "@/store/breadcrumbs";
import BreadcrumbsItem from "@/components/BreadcrumbsItemComponent.vue";

export default defineComponent({
  components: {
    BreadcrumbsItem,
  },
  setup() {
    const store = useBreadcrumbs();
    return {
      store,
    };
  },
});
