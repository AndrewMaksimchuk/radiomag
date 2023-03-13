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
}

.header {
  &-nav {
    &__item {
      padding: 0 39px;

      @media (max-width: $breakpoint-mobile) {
        width: 100%;
        text-align: center;
      }
    }

    &__item:hover {
      @extend %button-style;

      text-decoration: underline;
    }
  }
}
</style>
