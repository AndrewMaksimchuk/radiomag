<template>
  <ul class="products">
    <li
      class="products__item"
      v-for="(item, index) in listOfGroups"
      :key="index">
        <router-link
          class="products__item-link"
          :to="{ name: 'group', params: { id: item.id, groupName: item.name } }">
            <img
              class="products__item-group-img"
              :src="'/images/groups/' + item.img"
              :alt="item.name">
            <h2 class="products__item-group-name">{{ item.name }}</h2>
        </router-link>
    </li>
  </ul>
</template>

<script>
import getListOfCatalogGroups from '@/services';

export default {
  name: 'Products',
  data() {
    return {
      listOfGroups: [],
    };
  },
  async created() {
    this.listOfGroups.push(...await getListOfCatalogGroups(1));
    this.listOfGroups.push(...await getListOfCatalogGroups(2));
    this.listOfGroups.push(...await getListOfCatalogGroups(3));

    console.log(this.listOfGroups);
  },
};
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
