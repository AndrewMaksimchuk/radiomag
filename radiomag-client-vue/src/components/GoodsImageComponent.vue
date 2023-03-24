<script setup lang="ts">
import type { Goods } from "@/store/goods";

defineProps<{
  goods: Goods;
}>();
</script>

<template>
  <img
    class="goods__img"
    :src="'https://www.rcscomponents.kiev.ua' + goods.product.image"
    :alt="goods.product.description[0]"
  />
</template>

<style lang="scss">
.goods {
  &__img {
    width: 300px;
    display: block;

    @media (max-width: $breakpoint-tablet) {
      width: 100%;
    }
  }
}
</style>
