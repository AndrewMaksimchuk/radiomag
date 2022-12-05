<template>
  <li class="header-nav__item">
    <RouterLink :to="link" class="link">{{ text }}</RouterLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
  text: string;
}>();
</script>
