<script setup lang="ts">
import type { WorkerProduct, TransferObject } from "@/public/types";
import type { FiltersItems, Group } from "@/../../dto/Group";
import { ref, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useGroup } from "@/store/group";
import { usePagination } from "@/store/pagination";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Pagination from "@/components/Pagination.vue";
import CardLine from "@/components/CardLineComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";
import Filters from "@/components/FiltersComponent.vue";

const route = useRoute();
const store = useGroup();
const storePagination = usePagination();

const id = route.params.id ?? "";
const allDataToShow = ref<WorkerProduct[]>([]);
const filterHeaders = ref<string[]>([]);
const allFilters = ref<FiltersItems>([]);
const groupWorker = ref<Worker>();

const toShow = computed(() => {
  const { start, end } = storePagination.getRange;
  return allDataToShow.value.slice(start, end);
});

const allDataToShowLength = computed(() => allDataToShow.value.length);

const putFilters = () => {
  const descriptionsTitles = store.data[id].descriptions_titles;

  const mapFilters = (data: FiltersItems[number][number]) => ({
    qty: data.qty,
    title: descriptionsTitles[data.title].value,
  });

  filterHeaders.value = Object.values(
    store.data[id].column_headers.product_descriptions
  ).slice(1);

  allFilters.value = store.data[id].filters
    .filter((item) => item.length)
    .map((filterData) => filterData.map(mapFilters));
};

onBeforeMount(async () => {
  window.scrollTo(0, 0);
  await store.load(id);

  const queryActivePage = Number(route.query.page) || 1;
  storePagination.setActive(queryActivePage);

  window.document.title = `${store.groupName}`;
  putFilters();

  const cloneData: Group = JSON.parse(JSON.stringify(store.data[id]));

  groupWorker.value = new Worker("/js/groupWorker.js");
  groupWorker.value.onmessage = (event: MessageEvent<TransferObject>) => {
    const { type, data } = event.data;
    if (type === "return_sum_all_product_description") {
      allDataToShow.value = data;
    }
  };
  groupWorker.value.postMessage({
    type: "sum_all_product_description",
    data: cloneData,
  });
});

onBeforeUnmount(() => {
  if (groupWorker.value != undefined) {
    groupWorker.value.terminate();
    groupWorker.value = undefined;
  }
});
</script>

<template>
  <div class="group">
    <SpinnerLoader v-if="store.isLoading" />
    <div v-else-if="!store.isError">
      <Filters :headers="filterHeaders" :data="allFilters" />
      <Pagination :length="allDataToShowLength">
        <section class="group__products">
          <CardLine
            v-for="(productItem, index) in toShow"
            :key="index"
            :product="productItem"
            :filterHeaders="filterHeaders"
          />
        </section>
      </Pagination>
    </div>
    <ErrorMessageInGroup v-if="store.isError" :errorMessage="store.isError" />
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
