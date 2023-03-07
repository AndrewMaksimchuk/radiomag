<script setup lang="ts">
import type { FiltersItems } from "../../../dto/Group";
import { ref, watch } from "vue";
import { useFilters } from "@/store/filtes";

defineProps<{
  filterIndex: number;
  header: string;
  item: FiltersItems[number][number];
}>();

const isChecked = ref(false);
const store = useFilters();

watch(
  () => store.resetAll,
  (value) => value === true && (isChecked.value = false)
);
</script>

<template>
  <input
    class="filter__item-input"
    type="checkbox"
    :name="item.title"
    :id="`${header}_${item.title}`"
    v-model="isChecked"
    @input="
      store.setSearchParams({
        filterIndex: filterIndex + 1,
        filterItemValue: item.title,
      })
    "
  />
  <label class="filter__item-label" :for="`${header}_${item.title}`">
    {{ item.title }} ({{ item.qty }})
  </label>
</template>

<style lang="scss">
.filter {
  &__item {
    display: flex;
    font-size: 1.2rem;
    padding-bottom: 11px;
    gap: 6px;

    &:hover {
      text-decoration: underline;
    }

    &-input {
      outline-offset: 1px;
    }

    &-label {
      flex-grow: 1;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
