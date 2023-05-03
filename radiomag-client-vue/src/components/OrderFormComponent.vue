<template>
  <section class="order-form">
    <p class="order-form__total-cost">
      {{ $t("order.form.totalCost") }}:
      <span>{{ store.totalCost }} {{ currency }}</span>
    </p>

    <div class="order-form__buttons-group">
      <button
        class="order-form__button order-form__button_color-gray"
        @click="clearCart"
      >
        {{ $t("order.form.clearCart") }}
      </button>

      <button class="order-form__button order-form__button_color-gray">
        <RouterLink
          class="order-form__button-link reset-text-decor"
          :to="{ name: 'products' }"
        >
          {{ $t("order.form.continueShopping") }}
        </RouterLink>
      </button>

      <button class="order-form__button order-form__button_color-red">
        {{ $t("order.form.toOrder") }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCart } from "@/store/cart";
import { getCurrency } from "@/utils/currency";

const store = useCart();

const currency = getCurrency();

const clearCart = () => {
  store.clear();
  window.scrollTo(0, 0);
};
</script>

<style lang="scss">
.order-form {
  width: 100%;
  min-height: 146px;
  padding: 26px 147px;
  background-color: var(--color-gray-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: $breakpoint-tablet) {
    padding: 18px 15px;
  }

  &__total-cost {
    padding-bottom: 24px;
    font-size: 1.6rem;
  }

  &__buttons-group {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;

    @media (max-width: $breakpoint-mobile) {
      width: 100%;
      flex-flow: column nowrap;
    }
  }

  &__button {
    padding: 13px 26px;
    border: none;
    color: var(--color-white);
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }

    &_color-gray {
      background-color: var(--color-gray-dark);
    }

    &_color-red {
      background-color: var(--color-red);
    }

    &-link {
      color: inherit;
    }
  }
}
</style>
