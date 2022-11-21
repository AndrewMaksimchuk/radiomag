<template>
    <button class="pagination__button" :disabled="store.isLeftButtonDisabled" @click="store.moveLeft">
        &#10094;
    </button>
</template>

<script setup>
import { usePagination } from '@/store/pagination';
const store = usePagination();
</script>