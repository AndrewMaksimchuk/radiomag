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

<style lang="scss">
.link {
  text-decoration: none;
  color: #fff;
  line-height: $line-height;

  &:focus {
    text-decoration: underline;
    text-underline-offset: 5px;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
}

.header {
  &-nav {
    &__item {
      text-align: center;
      padding: 0 39px;
      flex-grow: 1;

      @media (max-width: $breakpoint-tablet) {
        text-align: center;
        flex-grow: 0;
      }
    }
  }
}
</style>
