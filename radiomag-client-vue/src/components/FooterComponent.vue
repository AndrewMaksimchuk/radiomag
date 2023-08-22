<template>
  <section class="container">
    <footer class="footer">
      <FooterCatalog />
      <FooterDescription />
    </footer>
  </section>
</template>

<script setup lang="ts">
import { FooterCatalog } from "./FooterCatalogComponent";
import FooterDescription from "./FooterDescriptionComponent.vue";
</script>

<style lang="scss">
.footer {
  min-width: 100%;
}
</style>
