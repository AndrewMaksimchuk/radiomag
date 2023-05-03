<script setup lang="ts">
import type { Cart } from "@/store/cart";
import OrderTable from "./OrderTableComponent.vue";
import OrderCard from "./OrderCardComponent.vue";
import OrderForm from "./OrderFormComponent.vue";

defineProps<{
  cart: Cart;
}>();
</script>

<template>
  <section class="order">
    <h2 class="order__header-text">{{ $t("order.header") }}:</h2>
    <OrderTable>
      <OrderCard
        v-for="(product, index) in cart"
        :key="index"
        :index="index"
        :goods="product"
      />
    </OrderTable>
    <OrderForm />
  </section>
</template>

<style lang="scss">
.order {
  width: 100%;
  padding-bottom: 26px;

  &__header-text {
    width: 100%;
    padding-bottom: 20px;
    font-size: 2.4rem;
    font-weight: 700;

    @media (max-width: $breakpoint-tablet) {
      font-size: 1.6rem;
    }
  }
}
</style>
