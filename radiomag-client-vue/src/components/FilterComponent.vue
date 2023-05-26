<script setup lang="ts">
import type { FiltersItemsMod } from "../../../dto/Group";
import { watch, ref } from "vue";
import { useFilters } from "@/store/filtes";
import FilterItemComponent from "./FilterItemComponent.vue";

defineProps<{
  header: string;
  filterIndex: number;
  data: FiltersItemsMod[number];
}>();

const store = useFilters();
const list = ref<HTMLUListElement>();

watch(
  () => store.resetAll,
  (value) => value === true && list.value && (list.value.scrollTop = 0)
);
</script>

<template>
  <div class="filter">
    <h2 class="filter__header-text">{{ header }}</h2>
    <ul class="filter__container" ref="list">
      <li class="filter__item" v-for="(item, index) in data" :key="index">
        <FilterItemComponent
          :header="header"
          :filter-index="filterIndex"
          :item="item"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.filter {
  height: 234px;
  padding: 14px 10px;
  color: var(--color-black-light);
  border: 1px solid var(--color-gray-light);

  &__header-text {
    font-size: 1.4rem;
    font-weight: 700;
    padding-bottom: 14px;
    height: 15%;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__container {
    list-style: none;
    padding: 0;
    padding-left: 4px;
    padding-top: 4px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 85%;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-gray-light);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--blue-medium);
      border-radius: 5px;
    }
  }
}
</style>
