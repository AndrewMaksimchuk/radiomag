<template>
  <ul class="product-price">

    <li
       class="product-price__item"
      v-for="(item, index) in productPriceArray" :key="index">
        {{ item.q }}+
        <PriceItem :price="item.p"/>
    </li>

  </ul>
</template>

<script>
import PriceItem from './PriceItem.vue';

export default {
  name: 'ProductPrice',
  components: {
    PriceItem,
  },
  props: {
    productPriceArray: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.product-price {
  list-style: none;
  padding: 0;
  color: var(--color-gray-dark);

  &__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 12px;
  }

}
</style>
