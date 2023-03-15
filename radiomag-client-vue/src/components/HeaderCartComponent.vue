<template>
  <RouterLink :to="{ name: 'cart' }" class="cart" tabindex="-1">
    <button class="header__info-item card">
      <img
        src="@/assets/images/shopping-cart.svg"
        alt="shopping cart"
        class="header__img-info"
      />{{ $t("header.info.basket") }}:
      <span class="card__text">{{ cart.length }}</span>
    </button>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCart } from "@/store/cart";

const cart = useCart();
</script>

<style lang="scss">
.cart {
  display: block;
  height: 100%;
}

.card {
  @extend %button-style;

  padding: 0 32px;
  background-color: var(--color-red);

  &__text {
    font-weight: 700;
  }
}
</style>
