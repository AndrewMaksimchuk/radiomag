<script setup lang="ts">
import type { FiltersItemsMod } from "$/dto/Group";
import { ref, watch } from "vue";
import { useFilters } from "@/store/filtes";

defineProps<{
  filterIndex: number;
  header: string;
  item: FiltersItemsMod[number][number];
}>();

const isChecked = ref(false);
const store = useFilters();

watch(
  () => {
    return store.resetAll;
  },
  (value) => {
    return true === value && (isChecked.value = false);
  }
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
<style lang="scss" src="./style.scss"></style>
