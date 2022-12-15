<template>
  <main class="container content">
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
import CatalogShort from "@/components/CatalogShortComponent.vue";
import Linecard from "@/components/LinecardComponent.vue";
import PopularProducts from "@/components/PopularProductsComponent.vue";
import NewsShort from "@/components/NewsShortComponent.vue";
import Manufacturers from "@/components/ManufacturersComponent.vue";
import Bulletin from "@/components/BulletinComponent.vue";
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: 253px auto 253px;
  column-gap: 23px;
}
</style>
