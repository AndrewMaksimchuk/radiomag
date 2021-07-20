<template>
  <nav class="catalog-of-products">
    <h2 class="catalog-of-products__header">Каталог компонентів</h2>
    <ul class="catalog-of-products__list ">
      <CatalogShortItem v-for="(item, index) in catalog" :key="index" :data="item"/>
    </ul>
  </nav>
</template>

<script>
import CatalogShortItem from './CatalogShortItem.vue';

export default {
  name: 'CatalogShort',
  components: {
    CatalogShortItem,
  },
  data() {
    return {
      catalog: [
        { name: 'Електронни компоненти та комплектующі', img: 'electronic_components.png', id: 1 },
        { name: 'Інструменти та обладнання', img: 'soldering.png', id: 2 },
        { name: 'Навчающі конструктори "Практична електроніка"', img: 'constructors.jpg', id: 3 },
      ],
    };
  },
};
</script>

<style lang="scss">
.catalog-of-products {
  width: 253px;
  padding-bottom: 23px;
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
    display: flex;
    align-items: center;
    text-decoration: none;
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
  }
}
</style>
