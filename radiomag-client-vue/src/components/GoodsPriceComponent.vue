<script setup lang="ts">
import type { Goods } from "@/store/goods";
import ProductPrice from "@/components/ProductPrice.vue";

defineProps<{
  goods: Goods;
}>();
</script>

<template>
  <div class="card-line__center-price">
    <h3 class="card-line__center-price-header-text">Ціна:</h3>
    <ProductPrice :productPriceArray="goods.product.prices" />
  </div>
</template>
