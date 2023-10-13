<template>
  <RouterLink
    :to="{ name: 'cart' }"
    class="header__info-item cart"
    tabindex="-1"
    @click="emits('click')"
  >
    <button class="header__info-item card">
      <img
        src="@/assets/images/shopping-cart.svg"
        alt="shopping cart"
        class="header__img-info card__img"
      />

      <span class="card__text"> {{ $t("header.info.basket") }}: &nbsp; </span>

      <span class="card__items">
        {{ cart.length }}
      </span>
    </button>
  </RouterLink>
</template>
<style lang="scss" src="./style.scss"></style>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCart } from "@/store/cart";

const emits = defineEmits<{
  (e: "click"): void;
}>();

const cart = useCart();
</script>
