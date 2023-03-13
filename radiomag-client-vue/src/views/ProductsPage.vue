<template>
  <ul class="products">
    <li
      class="products__item"
      v-for="(item, index) in store.allMenuGroups"
      :key="index"
    >
      <RouterLink
        class="products__item-link"
        :to="{ name: 'group', params: { id: item.id } }"
      >
        <img
          class="products__item-group-img"
          :src="'/images/groups/' + item.img"
          :alt="item.name"
        />
        <h2 class="products__item-group-name">{{ item.name }}</h2>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCatalog } from "../store/catalog";

const store = useCatalog();
store.useAllMenuGroups();
</script>

<style lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 50px;
  padding: 45px 0;
  list-style: none;
  justify-content: space-between;

  @media (max-width: $breakpoint-tablet) {
    padding: 0;
    padding-bottom: 28px;
    justify-content: center;
  }

  &__item {
    width: 300px;
    height: 100px;

    &-link {
      text-decoration: none;
      color: inherit;
      display: flex;
      column-gap: 20px;
      align-items: center;

      &:hover {
        text-decoration: underline;
        transform: scale(1.1);
      }
    }

    &-group-img {
      width: 80px;
      height: 80px;
    }

    &-group-name {
    }
  }
}
</style>
