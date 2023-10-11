<template>
  <main class="content">
    <div>
      <CatalogShort />
      <Linecard />
    </div>

    <div>
      <PopularProducts />
      <NewsShort />
    </div>

    <div>
      <Manufacturers />
      <Bulletin />
    </div>
  </main>
</template>

<script setup lang="ts">
import { CatalogShort } from "@/components/CatalogShortComponent";
import { Linecard } from "@/components/LinecardComponent";
import PopularProducts from "@/components/PopularProductsComponent.vue";
import { NewsShort } from "@/components";
import Manufacturers from "@/components/ManufacturersComponent.vue";
import { Bulletin } from "@/components/BulletinComponent";
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: 253px auto 253px;
  column-gap: 23px;

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: 100%;
  }
}
</style>
