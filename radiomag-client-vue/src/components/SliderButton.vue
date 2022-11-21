<template>
  <div :class="{ 'slider__controls-button_active': isActive }" class="slider__controls-button">
  </div>
</template>

<script setup>
defineProps({
  isActive: {
      type: Boolean,
      required: true,
    },
})
</script>
