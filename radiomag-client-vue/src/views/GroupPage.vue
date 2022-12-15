<template>
  <div class="group">
    <SpinnerLoader v-if="store.isLoading" />
    <div v-else-if="!store.isError">
      <section class="group__filters">
        <Filters
          v-for="(item, index) in filterHeaders"
          :key="index"
          :header="item"
          :id="index"
          :data="allFilters[index]"
        />
      </section>

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

<script setup lang="ts">
import type { RouteParams } from "vue-router";
import type { WorkerProduct, TransferObject } from "@/public/types.d.ts";
import type { Group } from "@/../../dto/Group.d.ts";

import { ref, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useGroup } from "@/store/group";
import { usePagination } from "@/store/pagination";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Filters from "@/components/Filters.vue";
import Pagination from "@/components/Pagination.vue";
import CardLine from "@/components/CardLineComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";

const route = useRoute();
const store = useGroup();
const storePagination = usePagination();

type RouteWithId = RouteParams & { id: string };

const { id } = route.params as RouteWithId;
const allDataToShow = ref<WorkerProduct[]>([]);
const filterHeaders = ref<string[]>([]);
const allFilters = ref<{ title: string; qty: number }[][]>([]);
const groupWorker = ref<Worker>();

const toShow = computed(() => {
  const { start, end } = storePagination.getRange;
  return allDataToShow.value.slice(start, end);
});

const allDataToShowLength = computed(() => allDataToShow.value.length);

const putFilters = () => {
  const descriptionsTitles = store.data[id].descriptions_titles;
  filterHeaders.value = Object.values(
    store.data[id].column_headers.product_descriptions
  ).slice(1);
  const { filters } = store.data[id];

  allFilters.value = filters
    .filter((item) => item.length)
    .map((filterData) =>
      filterData.map((data) => {
        const returnedData = {
          qty: data.qty,
          title: descriptionsTitles[data.title].value,
        };
        return returnedData;
      })
    );
};

onBeforeMount(async () => {
  window.scrollTo(0, 0);
  await store.load(id);

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

<style lang="scss">
.group {
  min-height: calc(100vh - 244px);

  &__filters {
    display: flex;
    flex-wrap: wrap;
  }

  &__products {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
}
</style>
