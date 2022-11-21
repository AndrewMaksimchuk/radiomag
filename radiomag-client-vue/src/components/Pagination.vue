<template>
  <PaginationItem/>
  <slot></slot>
  <PaginationItem/>
</template>

<script setup>
import { watch } from 'vue';
import { usePagination } from '@/store/pagination';
import PaginationItem from './PaginationItem.vue';

const props = defineProps({
  length: {
      type: Number,
      required: true,
    },
});

const store = usePagination();
watch(props, (newPropsValue) => store.setLength(newPropsValue.length));
</script>

<style lang="scss">
.pagination {
  width: 100%;
  padding: 14px 4px;
  color: var(--color-black-light);
  display: flex;
  align-items: center;
  column-gap: 4px;

  &__button {
    min-width: 29px;
    height: 24px;
    border: 1px solid var(--color-gray-light);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--blue-medium);
      cursor: pointer;
      color: var(--color-white);
    }

    &:disabled {
      cursor: not-allowed;
      background: none;
    }
  }
}
</style>