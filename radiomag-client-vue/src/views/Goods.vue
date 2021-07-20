<template>
  <article class="goods">

    <img
      class="goods__img"
      :src="'https://www.rcscomponents.kiev.ua' + productDescription.image"
      :alt="productDescription.description[0]">

    <div class="goods__descriptions">
      <h2 class="goods__descriptions-text-header">{{ productDescription.description[0] }}</h2>
      <p class="goods__descriptions-item">
        <span>Код товара: </span>
        <span>{{ productDescription.id }}</span>
      </p>
      <p
        class="goods__descriptions-item"
        v-for="(item, index) in nameDescriptionItems"
        :key="index">
        <span>{{ item }}: </span>
        <span>{{ productDescription.description[index + 1] }}</span>
      </p>
    </div>

    <div class="card-line__center-availability">
      <h3 class="card-line__center-availability-header-text font-size-14">Наявність: </h3>
      <ProductAvailability
        :inStock="productDescription.stock_data"
        :unit="productDescription.pcs"/>
    </div>

    <QuantitySelectionForm
      :style="{ 'flex-direction': 'column' }"
      :quantityOfProduct="quantityOfProduct"
      v-on:changeQuantityOfProduct="changeQuantityOfProduct"
      v-on:addToCart="addToCart">
      <ProductPrice :productPriceArray="productDescription.prices"/>
    </QuantitySelectionForm>

  </article>
</template>

<script>
import ProductAvailability from '@/components/ProductAvailability.vue';
import ProductPrice from '@/components/ProductPrice.vue';
import QuantitySelectionForm from '@/components/QuantitySelectionForm.vue';

export default {
  name: 'Goods',
  components: {
    ProductAvailability,
    ProductPrice,
    QuantitySelectionForm,
  },
  data() {
    return {
      productDescription: null,
      nameDescriptionItems: null,
      quantityOfProduct: 1,
    };
  },
  created() {
    window.scrollTo(0, 0);
    const { product, filterHeaders } = this.$store.getters.getGoods;
    this.productDescription = product;
    this.nameDescriptionItems = filterHeaders;
    console.log('nameDescriptionItems: ', this.nameDescriptionItems);
    console.log('productDescription: ', this.productDescription);
  },
  methods: {
    changeQuantityOfProduct(quantity) {
      this.quantityOfProduct = quantity;
    },
    addToCart() {
      this.$store.commit('addGoodsToCart', { product: this.productDescription, quantity: this.quantityOfProduct });
      // Show notification that goods is added to cart
    },
  },
  watch: {
    quantityOfProduct() {
      if (this.quantityOfProduct <= 0) {
        this.quantityOfProduct = 1;
      }
    },
  },
};
</script>

<style lang="scss">
.goods {
  display: flex;
  column-gap: 48px;
  color: var(--color-gray-dark);
  font-size: 1.2rem;

  &__img {
    width: 300px;
    display: block;
  }

  &__descriptions {

    &-text-header {
      padding-bottom: 12px;
      font-size: 1.4rem;
    }

    &-item {
      line-height: 1.8rem;
    }
  }
}

.font-size-14 {
  font-size: 1.4rem;
}
</style>
