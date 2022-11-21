<template>
  <main class="container content">

    <div>
      <CatalogShort/>
      <Linecard/>
    </div>

    <div>
      <PopularProducts/>
      <NewsShort/>
    </div>

    <div>
      <Manufacturers/>
      <Bulletin/>
    </div>

  </main>
</template>

<script setup>
import CatalogShort from '@/components/CatalogShort.vue';
import Linecard from '@/components/Linecard.vue';
import PopularProducts from '@/components/PopularProducts.vue';
import NewsShort from '@/components/NewsShort.vue';
import Manufacturers from '@/components/Manufacturers.vue';
import Bulletin from '@/components/Bulletin.vue';
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: 253px auto 253px;
  column-gap: 23px;
}
</style>
