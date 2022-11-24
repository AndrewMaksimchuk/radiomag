<template>
  <div class="error-in-group">
    <h2 class="error-in-group__message">{{ errorMessage }} &#9785;</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  errorMessage: string,
}>();
</script>

<style lang="scss">
.error-in-group {
  color: var(--color-red);
  padding-bottom: 100px;

  &__message {
    font-size: 2.4rem;
    white-space: pre-wrap;
  }
}
</style>
