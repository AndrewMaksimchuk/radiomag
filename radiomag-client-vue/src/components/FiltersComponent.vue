<script setup lang="ts">
import type { FiltersItemsMod } from "../../../dto/Group";
import type { AllSearchParams } from "@/store/filters";
import { useFilters } from "@/store/filtes";
import Filter from "./FilterComponent.vue";

defineProps<{
  headers: string[];
  data: FiltersItemsMod;
}>();

const emit = defineEmits<{
  (e: "filtersApply", data: AllSearchParams): void;
  (e: "filtersReset"): void;
}>();

const store = useFilters();

const reset = () => {
  store.reset();
  emit("filtersReset");
};
</script>

<template>
  <section v-if="data.length">
    <h2 class="filters__header">{{ $t("filters.header") }}</h2>
    <div class="filters">
      <Filter
        v-for="(header, index) in headers"
        :key="index"
        :filterIndex="index"
        :header="header"
        :data="data[index]"
      />
    </div>
    <div class="filters__control">
      <button class="button" @click="reset">
        {{ $t("filters.buttons.reset") }}
      </button>
      <button
        class="button"
        @click="$emit('filtersApply', store.allSearchParams)"
      >
        {{ $t("filters.buttons.apply") }}
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));

  &__header {
    padding: 12px;
    background-color: var(--blue-medium);
    color: var(--color-white);

    @media (max-width: $breakpoint-tablet) {
      font-size: 14px;
    }
  }

  &__control {
    display: flex;
    column-gap: 4px;
    padding: 14px 4px;
    padding-bottom: 0;
  }
}
</style>
