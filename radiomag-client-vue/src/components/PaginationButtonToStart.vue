<template>
    <button class="pagination__button" :disabled="store.isLeftButtonDisabled" @click="store.toFirst">
        На початок
    </button>
</template>

<script setup>
import { usePagination } from '@/store/pagination';
const store = usePagination();
</script>
