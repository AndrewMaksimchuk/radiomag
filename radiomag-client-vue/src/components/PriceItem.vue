<template>
  <span>{{ priceFixed }}&nbsp;{{ currency }}</span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    price: {
      type: [Number, String],
      default: '-',
    },
    currency: {
      type: String,
      default: 'грн',
    },
});

const priceFixed = computed(() => props.price.toFixed(2));
</script>
