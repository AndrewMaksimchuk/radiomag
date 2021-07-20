<template>
  <div class="group">

    <Breadcrumbs/>
    <SpinnerLoader v-if="isLoading"/>

    <div v-else-if="data">

      <!-- Секція фільтрів на всю групу -->
      <section class="group__filters">
        <Filter
          v-for="(item, index) in filterHeaders"
          :key="index"
          :filterId="index.toString()"
          :filterHeader="item"
          :filterData="allFilters[index]" />
      </section>

      <!-- Секція з кнопками управління пагінація -->
      <Pagination
        :page="pagination.page"
        :productsOnPage="pagination.productsOnPage"
        :lengthOfData="allDataToShow.length"
        v-on:changePage="changePage"
        v-on:movePageLeft="movePageLeft"
        v-on:movePageRight="movePageRight"
        v-on:toFirstPage="toFirstPage"
        v-on:toLastPage="toLastPage"/>

      <!-- Секція з карточками товара -->
      <section class="group__products">
        <CardLine
          v-for="(productItem, index) in toShow"
          :key="index"
          :product="productItem"
          :filterHeaders="filterHeaders"/>
      </section>

      <!-- Секція з кнопками управління пагінація -->
      <Pagination
        :page="pagination.page"
        :productsOnPage="pagination.productsOnPage"
        :lengthOfData="allDataToShow.length"
        v-on:changePage="changePage"
        v-on:movePageLeft="movePageLeft"
        v-on:movePageRight="movePageRight"
        v-on:toFirstPage="toFirstPage"
        v-on:toLastPage="toLastPage"/>

    </div>

    <ErrorMessageInGroup v-else :errorMessage="errorMessage"/>

  </div>
</template>

<script>
import ErrorMessageInGroup from '@/components/ErrorMessageInGroup.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import SpinnerLoader from '@/components/SpinnerLoader.vue';
import Filter from '@/components/Filter.vue';
import CardLine from '@/components/CardLine.vue';
import Pagination from '@/components/Pagination.vue';
import { getGroupData } from '@/services/index';

export default {
  name: 'Group',
  components: {
    Breadcrumbs,
    SpinnerLoader,
    ErrorMessageInGroup,
    Filter,
    CardLine,
    Pagination,
  },
  props: {
    groupName: {
      type: String,
    },
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      errorMessage: 'Не вдалося отримати список товарів, спробуйте ще раз...\nОновіть сторінку "Ctrl + F5"',
      isLoading: true,
      data: {},
      allDataToShow: [],
      filterHeaders: [],
      allFilters: [],
      pagination: {
        page: 1,
        productsOnPage: 25,
      },
      groupWorker: undefined,
    };
  },
  async created() {
    window.scrollTo(0, 0);
    try {
      if (this.groupName) {
        document.title = `${document.title} ${this.groupName}`;
      }

      const isGroupDataExist = this.$store.getters.getDataOfGroupProductsById(this.id);
      if (isGroupDataExist) {
        this.data = isGroupDataExist;
      } else {
        this.data = await getGroupData(this.id);
        this.$store.commit('addDataOfGroup', { id: this.id, data: this.data });
      }
      this.putFilters();
      this.isLoading = false;
    } catch (error) {
      this.data = undefined;
      this.isLoading = false;
    }

    const cloneData = JSON.parse(JSON.stringify(this.data));

    // Add web worker
    this.groupWorker = new Worker('/js/groupWorker.js');
    this.groupWorker.onmessage = this.work;
    this.groupWorker
      .postMessage({ typeOfWork: 'sum_all_product_description', data: cloneData });
  },
  beforeUnmount() {
    this.groupWorker.terminate();
    this.groupWorker = undefined;
  },
  computed: {
    toShow() {
      const { start, end } = this.getRangeOfProduct;
      return this.allDataToShow.slice(start, end);
    },
    getRangeOfProduct() {
      const end = this.pagination.page * this.pagination.productsOnPage;
      const start = end - this.pagination.productsOnPage;
      return { start, end };
    },
  },
  methods: {
    work(event) {
      const { typeOfWork, data } = event.data;
      if (typeOfWork === 'return_sum_all_product_description') {
        this.allDataToShow = data;
      }
    },
    changePage(numberOfPage) {
      this.pagination.page = numberOfPage;
    },
    movePageLeft() {
      this.pagination.page -= 1;
    },
    movePageRight() {
      this.pagination.page += 1;
    },
    toFirstPage() {
      this.pagination.page = 1;
    },
    toLastPage(numberOfButtons) {
      this.pagination.page = numberOfButtons;
    },
    putFilters() {
      const descriptionsTitles = this.data.descriptions_titles;
      this.filterHeaders = this.data.column_headers.product_descriptions.slice(1);
      const { filters } = this.data;
      this.allFilters = filters.filter((item) => item.length)
        .map((filterData) => filterData.map((data) => {
          const returnedData = { qty: data.qty, title: descriptionsTitles[data.title].value };
          return returnedData;
        }));
    },
  },
};
</script>

<style lang="scss">
.group  {
  // padding: 14px 0;

  &__filters {
    display: flex;
    flex-wrap: wrap;
  }

  &__products {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
}
</style>
