import { defineComponent } from "vue";
import { useBreadcrumbs } from "@/store/breadcrumbs";
import { BreadcrumbsItem } from "@/components";

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
