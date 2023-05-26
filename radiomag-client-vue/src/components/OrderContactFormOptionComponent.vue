<script setup lang="ts">
defineProps<{
  options: unknown;
}>();
</script>

<template>
  <option v-for="{ value, textI18nKey } in options" :key="value" :value="value">
    {{ $t(textI18nKey) }}
  </option>
</template>
