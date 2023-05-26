<template>
  <ul class="product-availability">
    <li
      class="product-availability__item"
      v-for="(item, index) in inStock"
      :key="index"
    >
      <span class="product-availability__item_dark-color">{{
        item.stockName
      }}</span>
      - {{ item.stock }}&nbsp;{{ unit }}
    </li>
  </ul>
</template>

<script setup lang="ts">
type InStock = {
  stock: string;
  stockName: string;
}[];

defineProps<{
  inStock: InStock;
  unit: string;
}>();
</script>

<style lang="scss">
.product-availability {
  padding: 0;
  list-style: none;
  color: var(--color-gray-dark);

  &__item {
    line-height: 1.8rem;

    &_dark-color {
      text-transform: capitalize;
    }
  }
}
</style>
