<script setup lang="ts">
import Filter from "./FilterComponent.vue";

defineProps<{
  headers: string[];
  data: { title: string; qty: number }[][];
}>();
</script>

<template>
  <section>
    <div class="filters">
      <Filter
        v-for="(header, index) in headers"
        :key="index"
        :id="index"
        :header="header"
        :data="data[index]"
      />
    </div>
    <div class="filters__control">
      <button class="button">
        {{ $t("filters.buttons.reset") }}
      </button>
      <button class="button">
        {{ $t("filters.buttons.apply") }}
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));

  &__control {
    display: flex;
    column-gap: 4px;
    padding: 14px 4px;
    padding-bottom: 0;
  }
}
</style>
