<script setup lang="ts">
defineProps<{
  path: string;
  name: string;
}>();
</script>

<template>
  <li class="breadcrumbs__item">
    <RouterLink class="breadcrumbs__link" :to="path">
      {{ name }}
      <slot></slot>
    </RouterLink>
  </li>
</template>

<style lang="scss">
.breadcrumbs {
  &__item {
    position: relative;

    &:not(:last-child)::after {
      content: "";
      width: 1px;
      height: 1.2rem;
      position: absolute;
      top: 50%;
      right: -9px;
      transform: translateY(-50%) rotate(15deg);
      background-color: var(--color-white);
    }
  }

  &__link {
    text-decoration: none;
    color: var(--color-white);
    letter-spacing: 1px;
    outline-offset: 3px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
