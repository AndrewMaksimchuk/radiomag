<template>
  <RouterLink
    :to="{ name: 'cart' }"
    class="header__info-item cart"
    tabindex="-1"
  >
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
  padding: 0;
}

a.cart {
  padding: 0;
}

.card {
  @extend %button-style;

  width: 100%;
  background-color: var(--color-red);

  &__text {
    font-weight: 700;
  }
}
</style>
