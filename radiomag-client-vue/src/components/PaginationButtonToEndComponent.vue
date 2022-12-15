<template>
  <button
    class="pagination__button"
    :disabled="store.isRightButtonDisabled"
    @click="store.toLast"
  >
    {{ $t("pagination.toEnd") }}
  </button>
</template>

<script setup lang="ts">
import { usePagination } from "@/store/pagination";
const store = usePagination();
</script>
