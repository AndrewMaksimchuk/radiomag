<template>
  <ul class="product-availability">
    <li
      class="product-availability__item"
      v-for="(item, index) in inStock"
      :key="index">
        <span class="product-availability__item_dark-color">{{ item.stockName }}</span>
        - {{ item.stock }}&nbsp;{{ unit }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ProductAvailability',
  props: {
    inStock: {
      type: Array,
    },
    unit: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.product-availability {
  padding: 0;
  list-style: none;
  color: var(--color-gray-dark);

  &__item {
    // padding-bottom: 6px;
    line-height: 1.8rem;

    &_dark-color {
      // font-weight: 700;
      text-transform: capitalize;
    }

  }

}
</style>
