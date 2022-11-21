<template>
    <button class="pagination__button" :disabled="store.isRightButtonDisabled" @click="store.toLast">
        У кінець
    </button>
</template>

<script setup>
import { usePagination } from '@/store/pagination';
const store = usePagination();
</script>