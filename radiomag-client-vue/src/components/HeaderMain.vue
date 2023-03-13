<script setup lang="ts">
import HeaderInfo from "./HeaderInfoComponent.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderNav from "./HeaderNavComponent.vue";
</script>

<template>
  <header class="header">
    <HeaderInfo />
    <HeaderSearch />
    <HeaderNav />
  </header>
</template>

<style lang="scss">
.line {
  width: 100%;
  height: $line-height;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--blue-medium);
  z-index: -99;
}

.header {
  position: relative;
  margin-bottom: 23px;
}
</style>
