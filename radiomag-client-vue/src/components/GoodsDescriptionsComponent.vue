<script setup lang="ts">
import type { Goods } from "@/store/goods";

defineProps<{
  goods: Goods;
}>();
</script>

<template>
  <div class="goods__descriptions">
    <h2 class="goods__descriptions-text-header">
      {{ goods.product.description[0] }}
    </h2>
    <p class="goods__descriptions-item">
      <span>Код товара: </span>
      <span>{{ goods.product.id }}</span>
    </p>
    <p
      class="goods__descriptions-item"
      v-for="(item, index) in goods.filterHeaders"
      :key="index"
    >
      <span>{{ item }}: </span>
      <span>{{ goods.product.description[index + 1] }}</span>
    </p>
  </div>
</template>

<style lang="scss">
.goods {
  &__descriptions {
    &-text-header {
      padding-bottom: 12px;
      font-size: 1.4rem;
    }

    &-item {
      line-height: 1.8rem;
    }
  }
}
</style>
