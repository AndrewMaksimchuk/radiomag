<template>
  <div :class="{ 'slider__controls-button_active': isActive }" class="slider__controls-button">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isActive: boolean,
}>();
</script>
