<template>
  <li class="catalog-of-products__list-item">
        <a href="/" class="catalog-of-products__link" @click.prevent="showModalWindow">
          <div class="catalog-of-products__image-container">
            <img
              :src="'/images/catalog/' + data.img"
              :alt="data.name"
              class="catalog-of-products__image"
            />
          </div>
          <h3 class="catalog-of-products__item-header">{{ data.name }}</h3>
        </a>
      </li>
</template>

<script>
export default {
  name: 'CatalogShortItem',
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  methods: {
    showModalWindow() {
      this.$store.dispatch('getCatalogGroupList', this.data.id);
    },
  },
};
</script>
