<template>
  <table class="order__table">
    <thead>
      <tr class="order__table-row">
        <th class="order__table-row-item">{{ $t("order.photo") }}</th>
        <th class="order__table-row-item">{{ $t("order.name") }}</th>
        <th class="order__table-row-item">{{ $t("order.inStock") }}</th>
        <th class="order__table-row-item">{{ $t("order.cost") }}</th>
        <th class="order__table-row-item">{{ $t("order.quantity") }}</th>
        <th class="order__table-row-item"></th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<style lang="scss">
.order {
  &__table {
    width: 100%;
    border-collapse: collapse;

    &-row {
      font-size: 1.2rem;
      font-weight: 400;
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);

      @media (max-width: $breakpoint-tablet) {
        display: none;
      }

      &-item {
        padding: 10px 16px;
        text-align: left;
      }
    }
  }
}
</style>
