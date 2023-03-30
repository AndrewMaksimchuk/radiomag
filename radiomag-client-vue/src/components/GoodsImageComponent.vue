<script setup lang="ts">
import type { Goods } from "@/store/goods";

defineProps<{
  goods: Goods;
}>();
</script>

<template>
  <img
    v-if="goods.product.image"
    class="goods__img"
    :src="'https://www.rcscomponents.kiev.ua' + goods.product.image"
    :alt="goods.product.description[0]"
  />
  <img
    v-else
    class="goods__img"
    src="@/assets/images/empty.jpg"
    alt="empty image"
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
