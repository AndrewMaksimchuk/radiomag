<script setup lang="ts">
import type { WorkerProduct, TransferObject } from "@/public/types";
import type { FiltersItems, FiltersItemsMod, Group } from "@/../../dto/Group";
import type { AllSearchParams } from "@/store/filters";
import { ref, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useGroup } from "@/store/group";
import { usePagination } from "@/store/pagination";
import { useBreadcrumbs } from "@/store/breadcrumbs";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Pagination from "@/components/PaginationComponent.vue";
import CardLine from "@/components/CardLineComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";
import Filters from "@/components/FiltersComponent.vue";

const route = useRoute();
const store = useGroup();
const storePagination = usePagination();
const storeBreadcrumbs = useBreadcrumbs();

const currentGroupId = route.params.id;
const allDataToShow = ref<WorkerProduct[]>([]);
const filterHeaders = ref<string[]>([]);
const allFilters = ref<FiltersItemsMod>([]);

const toShow = computed(() => {
  const { start, end } = storePagination.getRange;
  return allDataToShow.value.slice(start, end);
});

const allDataToShowLength = computed(() => allDataToShow.value.length);

const isEmpty = computed(() => allDataToShowLength.value === 0);

const putFilters = () => {
  if (currentGroupId === undefined) return;

  const descriptionsTitles = store.data[currentGroupId]?.descriptions_titles;

  if (Boolean(descriptionsTitles) === false) return;

  const mapFilters = (data: FiltersItems[number][number]) => {
    const obj = descriptionsTitles[data.title];
    return Array.isArray(obj)
      ? { qty: 0, title: "" }
      : { qty: data.qty, title: obj.value };
  };

  filterHeaders.value = Object.values(
    store.data[currentGroupId].column_headers.product_descriptions
  ).slice(1);

  allFilters.value = store.data[currentGroupId].filters
    .filter((item) => item.length)
    .map((filterData) => filterData.map(mapFilters));
};

const getFilteredGoods = (data: AllSearchParams) => {
  if (Object.keys(data).length === 0) return;
  store.groupWorker?.postMessage({
    type: "apply_filters",
    data: JSON.parse(JSON.stringify(data)),
  });
};

const resetGoods = () =>
  store.groupWorker?.postMessage({
    type: "reset",
  });

onBeforeMount(async () => {
  window.scrollTo(0, 0);

  if (currentGroupId === undefined) return;

  await store.load(currentGroupId);

  const queryActivePage = Number(route.query.page) || 1;
  storePagination.setActive(queryActivePage);

  window.document.title = `${store.groupName}`;

  const breadcrumbsUpdate = {
    name: store.groupName,
    path: route.fullPath,
  };
  route.meta.breadcrumbs?.set(breadcrumbsUpdate);
  storeBreadcrumbs.updateOne(route.fullPath, breadcrumbsUpdate);

  putFilters();

  store.createWorker();

  if (store.groupWorker) {
    const cloneData: Group = JSON.parse(
      JSON.stringify(store.data[currentGroupId])
    );

    store.groupWorker.onmessage = (event: MessageEvent<TransferObject>) => {
      const { type, data } = event.data;
      if (type === "return_sum_all_product_description") {
        allDataToShow.value = data;
      }
    };

    store.groupWorker.postMessage({
      type: "sum_all_product_description",
      data: cloneData,
    });
  }
});

onBeforeUnmount(() => store.terminateWorker());
</script>

<template>
  <div class="group">
    <SpinnerLoader v-if="store.isLoading" />
    <div v-if="!store.isLoading && !store.isError">
      <Filters
        :headers="filterHeaders"
        :data="allFilters"
        @filtersApply="getFilteredGoods"
        @filtersReset="resetGoods"
      />
      <Pagination :length="allDataToShowLength">
        <section v-if="!isEmpty" class="group__products">
          <CardLine
            v-for="(productItem, index) in toShow"
            :key="index"
            :product="productItem"
            :filterHeaders="filterHeaders"
          />
        </section>
      </Pagination>
    </div>
    <ErrorMessageInGroup
      v-if="!store.isLoading && store.isError"
      :errorMessage="store.isError"
    />
    <ErrorMessageInGroup
      v-if="!store.isLoading && !store.isError && isEmpty"
      :errorMessage="$t('group.error.empty')"
    />
  </div>
</template>

<style lang="scss">
.group {
  min-height: 100vh;

  &__products {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
}
</style>
