<template>
  <router-link :to="{ name: 'cart' }">
    <button class="header__info-item card">
      <img
        src="@/assets/images/shopping-cart.svg"
        alt="shopping cart"
        class="header__img-info"
      />Ваша корзина:
      <span class="card__text">{{ lengthOfCart }}</span>
    </button>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderCart',
  computed: {
    ...mapGetters(['getCart']),
    lengthOfCart() {
      if (this.getCart.length) return `${this.getCart.length} шт.`;
      return 'пуста';
    },
  },
};
</script>

<style lang="scss">

</style>
