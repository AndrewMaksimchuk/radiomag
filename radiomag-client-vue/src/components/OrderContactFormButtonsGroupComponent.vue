<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const continueShopping = () => router.push("products");
</script>

<template>
  <div class="contact-form-order__buttons-group">
    <button
      type="button"
      class="contact-form-order__button"
      @click="continueShopping"
    >
      {{ $t("order.form.continue") }}
    </button>
    <button
      type="submit"
      class="contact-form-order__button contact-form-order__button_color-red"
    >
      {{ $t("order.form.send") }}
    </button>
  </div>
</template>

<style lang="scss">
.contact-form-order {
  &__buttons-group {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    padding-bottom: 70px;

    @media (max-width: $breakpoint-mobile) {
      width: 100%;
      flex-flow: column nowrap;
      padding-bottom: 30px;
    }
  }

  &__button {
    padding: 13px 26px;
    border: none;
    color: var(--color-white);
    text-transform: uppercase;
    background-color: var(--color-gray-dark);

    &:hover {
      cursor: pointer;
    }

    &_color-red {
      background-color: var(--color-red);
    }
  }
}
</style>
