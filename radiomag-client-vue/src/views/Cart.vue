<template>
  <section class="cart">
    <div v-if="store.length">
      <Order :cart="store.cart"/>
      <OrderContactForm/>
    </div>
    <div v-else>
      <h2>Корзина порожня...</h2>
    </div>
  </section>
</template>

<script setup>
import { useCart } from '@/store/cart';
import Order from '@/components/Order.vue';
import OrderContactForm from '@/components/OrderContactForm.vue';

const store = useCart();
</script>

<style lang="scss">
.cart {
  min-height: 600px;
}
</style>
