import type { FiltersItemsMod } from "$/dto/Group";
import type { WorkerProduct } from "$/dto/Product";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useGroup } from "@/store/group";
import { usePagination } from "@/store/pagination";
import { useBreadcrumbs } from "@/store/breadcrumbs";
import { useFilters } from "./useFilters";
import { initWorker } from "./initWorker";

export const useOnBeforeMount = () => {
  const allDataToShow = ref<WorkerProduct[]>([]);
  const filterHeaders = ref<string[]>([]);
  const allFilters = ref<FiltersItemsMod>([]);
  const route = useRoute();
  const store = useGroup();
  const storePagination = usePagination();
  const storeBreadcrumbs = useBreadcrumbs();
  const currentGroupId = route.params.id;

  onBeforeMount(async () => {
    if (currentGroupId === undefined) {
      return;
    }

    await store.load(currentGroupId);

    const queryActivePage = Number(route.query.page);
    if (1 < queryActivePage) {
      storePagination.setActive(queryActivePage);
    }

    window.document.title = `${store.groupName}`;

    const breadcrumbsUpdate = {
      name: store.groupName,
      path: route.fullPath,
    };
    route.meta.breadcrumbs?.set(breadcrumbsUpdate);
    storeBreadcrumbs.updateOne(route.fullPath, breadcrumbsUpdate);

    const { headers, filters } = useFilters(currentGroupId);
    filterHeaders.value = headers.value;
    allFilters.value = filters.value;

    initWorker(currentGroupId, allDataToShow);
  });

  return {
    allDataToShow,
    filterHeaders,
    allFilters,
  };
};
