<template>
  <article class="goods">

    <img
      class="goods__img"
      :src="'https://www.rcscomponents.kiev.ua' + store.goods.product.image"
      :alt="store.goods.product.description[0]"
    >

    <div class="goods__descriptions">
      <h2 class="goods__descriptions-text-header">{{ store.goods.product.description[0] }}</h2>
      <p class="goods__descriptions-item">
        <span>Код товара: </span>
        <span>{{ store.goods.product.id }}</span>
      </p>
      <p
        class="goods__descriptions-item"
        v-for="(item, index) in store.goods.filterHeaders"
        :key="index">
        <span>{{ item }}: </span>
        <span>{{ store.goods.product.description[index + 1] }}</span>
      </p>
    </div>

    <div class="card-line__center-availability">
      <h3 class="card-line__center-availability-header-text font-size-14">Наявність: </h3>
      <ProductAvailability
        :inStock="store.goods.product.stock_data"
        :unit="store.goods.product.pcs"/>
    </div>

    <div class="card-line__center-price">
        <h3 class="card-line__center-price-header-text">Ціна: </h3>
        <ProductPrice :productPriceArray="store.goods.product.prices"/>
    </div>

    <QuantitySelectionForm
      :style="{ 'flex-direction': 'column' }"
      :quantityOfProduct="quantity"
      v-on:changeQuantityOfProduct="changeQuantityOfProduct"
      v-on:addToCart="addToCart">
    </QuantitySelectionForm>

  </article>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import { useGoods } from '@/store/goods';
import {useCart} from '@/store/cart';
import ProductAvailability from '@/components/ProductAvailability.vue';
import ProductPrice from '@/components/ProductPrice.vue';
import QuantitySelectionForm from '@/components/QuantitySelectionForm.vue';

const quantity = ref(1);
const store = useGoods();
const storeCart = useCart();

onBeforeMount(() => window.scrollTo(0, 0));

const changeQuantityOfProduct = (newQuantity) => quantity.value = newQuantity;

const addToCart = () => {
  storeCart.add({ product: store.goods.product, quantity });
  // Show notification that goods is added to cart
}

watch(quantity, (newValue, oldValue) => {
  if (newValue.value <= 0) quantity.value = 1;
});

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
