<template>
  <span>{{ priceFixed }}&nbsp;{{ currency }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface PriceItemProps {
    price: number,
    currency?: string,
}

const props = withDefaults(defineProps<PriceItemProps>(), {
  currency: "грн",
});

const priceFixed = computed(() => props.price.toFixed(2));
</script>
