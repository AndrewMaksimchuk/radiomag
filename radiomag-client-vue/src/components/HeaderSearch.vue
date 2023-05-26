<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeaderSearchField from "./HeaderSearchFieldComponent.vue";
</script>

<template>
  <section class="header-search container">
    <RouterLink to="/" class="header-search_order1">
      <img
        src="@/assets/images/logo_ukrainian.gif"
        alt="logo rcscomponents"
        class="logo logo_first-child"
      />
    </RouterLink>

    <HeaderSearchField class="header-search_order2" />

    <RouterLink to="/" class="header-search_order3">
      <img
        src="@/assets/images/radiomag_ukrainian.gif"
        alt="logo radiomag"
        class="logo logo_last-child"
      />
    </RouterLink>
  </section>
</template>

<style lang="scss">
.logo {
  object-fit: contain;
  height: 84px;

  &_first-child {
    @media (max-width: $breakpoint-tablet) {
      max-width: 109px;
    }
  }

  &_last-child {
    @media (max-width: $breakpoint-tablet) {
      max-width: 165px;
    }
  }

  &:hover {
    cursor: pointer;
  }
}

.header {
  &-search {
    padding: 23px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $breakpoint-tablet) {
      &_order2 {
        order: 3;
      }

      &_order3 {
        order: 2;
      }
    }
  }
}
</style>
