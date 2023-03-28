<script setup lang="ts">
import type { Goods } from "@/store/goods";
import ProductAvailability from "./ProductAvailability.vue";

defineProps<{
  goods: Goods;
}>();
</script>

<template>
  <div class="card-line__center-availability">
    <h3 class="card-line__center-availability-header-text font-size-14">
      Наявність:
    </h3>
    <ProductAvailability
      :inStock="goods.product.stock_data"
      :unit="goods.product.pcs"
    />
  </div>
</template>

<style lang="scss">
.font-size-14 {
  font-size: 1.4rem;
}
</style>
