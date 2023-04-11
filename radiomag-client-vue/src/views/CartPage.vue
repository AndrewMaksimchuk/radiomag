<template>
  <section class="cart cart-min-height">
    <div v-if="store.length">
      <Order :cart="store.cart" />
      <OrderContactForm />
    </div>
    <div v-else>
      <h2>{{ $t("order.empty") }}</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCart } from "@/store/cart";
import Order from "@/components/OrderComponent.vue";
import OrderContactForm from "@/components/OrderContactForm.vue";

const store = useCart();
</script>

<style lang="scss">
.cart-min-height {
  min-height: 600px;
}
</style>
