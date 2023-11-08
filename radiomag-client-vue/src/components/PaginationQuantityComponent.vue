<script setup lang="ts">
import { usePagination } from "@/store/pagination";

const store = usePagination();
</script>

<template>
  <select id="pagination-quantity" class="pagination__quantity">
    <option
      class="pagination__quantity-option"
      v-for="item in store.quantity"
      :key="item"
      :value="item"
      :selected="item === store.onPage ? true : false"
      @click="store.setOnPage(item)"
    >
      {{ item }}
    </option>
  </select>
</template>

<style lang="scss">
.pagination {
  &__quantity {
    min-width: 50px;
    height: 24px;
    border: 1px solid var(--border-color);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--blue-medium);
      cursor: pointer;
      color: var(--color-white);
    }

    &-option {
      background-color: #fff;
      color: #000;
    }
  }
}
</style>
