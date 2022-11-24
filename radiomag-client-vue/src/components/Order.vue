<template>
  <section class="order">
    <h2 class="order__header-text">Замовлення: </h2>

    <table class="order__table">
      <thead>
        <tr class="order__table-row">
          <th class="order__table-row-item">Фото</th>
          <th class="order__table-row-item">Назва</th>
          <th class="order__table-row-item">У наявності</th>
          <th class="order__table-row-item">Вартість</th>
          <th class="order__table-row-item">Кількість</th>
          <th class="order__table-row-item"></th>
        </tr>
      </thead>
      <tbody>
        <OrderCard
          v-for="(product, index) in cart"
          :key="index"
          :index="index"
          :goods="product"
        />
      </tbody>
    </table>
    <OrderForm/>
  </section>
</template>

<script setup lang="ts">
import type { Cart } from '@/store/cart';
import OrderCard from './OrderCard.vue';
import OrderForm from './OrderForm.vue';

defineProps<{
  cart: Cart,
}>();
</script>

<style lang="scss">
.order {
  width: 100%;

  &__header-text {
    width: 100%;
    padding-bottom: 20px;
    font-size: 2.4rem;
    font-weight: 700;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;

    &-row {
      font-size: 1.2rem;
      font-weight: 400;
      background-color: var(--color-white);
      border: 1px solid var(--color-gray-light);

      &-item {
        padding: 10px 16px;
        text-align: left;
      }
    }
  }
}
</style>
