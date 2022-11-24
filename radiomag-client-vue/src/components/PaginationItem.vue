<template>
  <div class="pagination" v-if="store.length">
    <PaginationButtonToStart/>
    <PaginationButtonToLeft/>
    <PaginationButton/>
    <PaginationButtonToRight/>
    <PaginationButtonToEnd/>
    <!-- Maybe add select field for the number of products on the page -->
  </div>
</template>

<script setup lang="ts">
import { usePagination } from '@/store/pagination';
import PaginationButtonToStart from './PaginationButtonToStart.vue';
import PaginationButtonToLeft from './PaginationButtonToLeft.vue';
import PaginationButton from './PaginationButton.vue';
import PaginationButtonToRight from './PaginationButtonToRight.vue';
import PaginationButtonToEnd from './PaginationButtonToEnd.vue';

const store = usePagination();
</script>
