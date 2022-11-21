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

<script setup>
import { ref, computed, onBeforeMount, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { useGroup } from '@/store/group';
import { usePagination } from '@/store/pagination';
import SpinnerLoader from '@/components/SpinnerLoader.vue';
import Filters from '@/components/Filters.vue';
import Pagination from '@/components/Pagination.vue';
import CardLine from '@/components/CardLine.vue';
import ErrorMessageInGroup from '@/components/ErrorMessageInGroup.vue';

const route = useRoute();
const store = useGroup();
const storePagination = usePagination();

const { id } = route.params;
const allDataToShow = ref([]);
const filterHeaders = ref([]);
const allFilters = ref([]);
const groupWorker = ref(null);

const toShow = computed(() => {
  const { start, end } = storePagination.getRange;
  return allDataToShow.value.slice(start, end);
});

const allDataToShowLength = computed(() => allDataToShow.value.length);

const work = (event) =>  {
  const { typeOfWork, data } = event.data;
  if (typeOfWork === 'return_sum_all_product_description') {
    allDataToShow.value = data;
  }
}

const putFilters = () => {
  const descriptionsTitles = store.data[id].descriptions_titles;
  filterHeaders.value = store.data[id].column_headers.product_descriptions.slice(1);
  const { filters } = store.data[id];
  allFilters.value = filters.filter((item) => item.length)
    .map((filterData) => filterData.map((data) => {
      const returnedData = { qty: data.qty, title: descriptionsTitles[data.title].value };
      return returnedData;
    }));
}

onBeforeMount(async () => {
  window.scrollTo(0, 0);
  await store.load(id);
  
  window.document.title = `${store.groupName}`;
  putFilters();

  const cloneData = JSON.parse(JSON.stringify(store.data[id]));

  groupWorker.value = new Worker('/js/groupWorker.js');
  groupWorker.value.onmessage = work;
  groupWorker.value.postMessage({ typeOfWork: 'sum_all_product_description', data: cloneData });
});

onBeforeUnmount(() => {
    groupWorker.value.terminate();
    groupWorker.value = null;
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
