import type { useGoods } from "@/store/goods";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useBreadcrumbs } from "@/store/breadcrumbs";

export const useHooks = (store: ReturnType<typeof useGoods>) => {
  const route = useRoute();
  const storeBreadcrumbs = useBreadcrumbs();

  onBeforeMount(() => {
    if (store.goods?.product.articul) {
      const breadcrumbsUpdate = {
        name: store.goods?.product.articul,
        path: route.fullPath,
      };
      route.meta.breadcrumbs?.set(breadcrumbsUpdate);
      storeBreadcrumbs.updateOne(route.fullPath, breadcrumbsUpdate);
    }
  });
};
