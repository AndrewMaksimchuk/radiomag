<template>
  <button
    class="pagination__button"
    :disabled="store.isLeftButtonDisabled"
    @click="store.toFirst"
  >
    {{ $t("pagination.toStart") }}
  </button>
</template>

<script setup lang="ts">
import { usePagination } from "@/store/pagination";
const store = usePagination();
</script>
