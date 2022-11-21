<template>
  <button 
    class="pagination__button" 
    v-for="buttonNumber in store.whichButtonsDisplayed"
    :key="buttonNumber"
    :class="{ 'active-button': buttonNumber === store.activePage }"
    @click="store.setActive(buttonNumber)"
  >
    {{ buttonNumber }}
  </button>
</template>

<script setup>
import { usePagination } from '@/store/pagination';
const store = usePagination();
</script>

<style lang="scss">
.active-button {
  background-color: var(--blue-medium);
  color: var(--color-white);
}
</style>
