<template>
  <section class="cart">
    <div v-if="lengthOfGoodsInOrder">
      <Order :cart="getCart"/>
      <OrderContactForm/>
    </div>
    <div v-else>
      <h2>Корзина порожня...</h2>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Order from '@/components/Order.vue';
import OrderContactForm from '@/components/OrderContactForm.vue';

export default {
  name: 'Cart',
  components: {
    Order,
    OrderContactForm,
  },
  computed: {
    ...mapGetters(['getCart']),
    lengthOfGoodsInOrder() {
      return this.getCart.length;
    },
  },
};
</script>

<style lang="scss">
.cart {
  min-height: 600px;
}
</style>
