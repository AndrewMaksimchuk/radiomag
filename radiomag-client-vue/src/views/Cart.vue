<template>
  <section class="cart">
    <Order/>
    <ContactFormOrder/>
  </section>
</template>

<script>
import Order from '@/components/Order.vue';
import ContactFormOrder from '@/components/ContactFormOrder.vue';

export default {
  name: 'Cart',
  components: {
    Order,
    ContactFormOrder,
  },

};
</script>

<style lang="scss">
.cart {
  min-height: 600px;
}
</style>
