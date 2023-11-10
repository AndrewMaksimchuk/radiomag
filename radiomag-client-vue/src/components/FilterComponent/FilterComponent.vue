<script setup lang="ts">
import type { FiltersItemsMod } from "$/dto/Group";
import { watch, ref } from "vue";
import { useFilters } from "@/store/filtes";
import { FilterItem } from "@/components";

defineProps<{
  header: string;
  filterIndex: number;
  data: FiltersItemsMod[number];
}>();

const store = useFilters();
const list = ref<HTMLUListElement>();

watch(
  () => {
    return store.resetAll;
  },
  (value) => {
    return true === value && list.value && (list.value.scrollTop = 0);
  }
);
</script>

<template>
  <div class="filter">
    <h2 class="filter__header-text">{{ header }}</h2>
    <ul class="filter__container" ref="list">
      <li class="filter__item" v-for="(item, index) in data" :key="index">
        <FilterItem :header="header" :filter-index="filterIndex" :item="item" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" src="./style.scss"></style>
