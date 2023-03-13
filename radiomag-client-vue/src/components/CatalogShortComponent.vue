<template>
  <nav class="catalog-of-products" v-if="store.length">
    <h2 class="catalog-of-products__header">{{ $t("catalogComponents") }}</h2>
    <ul class="catalog-of-products__list">
      <CatalogShortItem
        v-for="(item, index) in store.catalog"
        :key="index"
        :data="item"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useCatalog } from "@/store/catalog";
import CatalogShortItem from "./CatalogShortItem.vue";

const store = useCatalog();
store.useMenu();
</script>

<style lang="scss">
.catalog-of-products {
  width: 253px;
  padding-bottom: 23px;

  @media (max-width: $breakpoint-mobile) {
    width: 100%;
  }

  &__header {
    width: 100%;
    height: 41px;
    line-height: 41px;
    background-color: var(--blue-medium);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
  }

  &__link {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border: none;
    background: transparent;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  &__list {
    padding: 0;
    list-style: none;

    &-item {
      width: 100%;
      height: 101px;
      border: 1px solid var(--color-gray-light);
      background-color: var(--color-white);
    }
  }

  &__image-container {
    width: 91px;
    height: 101px;
  }

  &__image {
    width: 60px;
    transform: translateY(-50%);
    margin: auto;
    display: block;
    margin-top: 50%;
  }

  &__item-header {
    width: 162px;
    font-size: 16px;
    color: var(--color-black-light);

    @media (max-width: $breakpoint-mobile) {
      font-size: 12px;
      text-align: left;
    }
  }
}
</style>
