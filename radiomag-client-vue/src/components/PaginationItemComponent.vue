<template>
  <section class="pagination" v-if="store.length">
    <PaginationButtonToStart />
    <PaginationButtonToLeft />
    <PaginationButton />
    <PaginationButtonToRight />
    <PaginationButtonToEnd />
    <PaginationQuantity />
  </section>
</template>

<script setup lang="ts">
import { usePagination } from "@/store/pagination";
import PaginationButtonToStart from "./PaginationButtonToStartComponent.vue";
import PaginationButtonToLeft from "./PaginationButtonToLeft.vue";
import PaginationButton from "./PaginationButton.vue";
import PaginationButtonToRight from "./PaginationButtonToRight.vue";
import PaginationButtonToEnd from "./PaginationButtonToEndComponent.vue";
import PaginationQuantity from "./PaginationQuantityComponent.vue";

const store = usePagination();
</script>
