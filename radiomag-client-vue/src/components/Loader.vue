<template>
    <div>
        <div v-if="store.isLoading">is loading...</div>
        <slot v-else></slot>
    </div>
</template>

<script setup lang="ts">
import { useHTTPclient } from '@/store/httpClient';

const store = useHTTPclient();
</script>
