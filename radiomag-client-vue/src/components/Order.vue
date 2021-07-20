<template>
  <section class="order">
    <h2>Замовлення: </h2>
    <CardForCart/>
    <OrderForm/>
  </section>
</template>

<script>
import CardForCart from './CardForCart.vue';
import OrderForm from './OrderForm.vue';

export default {
  name: 'Order',
  components: {
    CardForCart,
    OrderForm,
  },

};
</script>

<style lang="scss">
.order {
  width: 100%;
}
</style>
