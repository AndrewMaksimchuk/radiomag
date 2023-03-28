<template>
  <article class="goods" v-if="store.goods">
    <GoodsImage :goods="store.goods" />
    <GoodsDescriptions :goods="store.goods" />
    <GoodsAvailability :goods="store.goods" />
    <GoodsPrice :goods="store.goods" />
    <QuantitySelectionForm
      :style="{ 'flex-direction': 'column' }"
      :quantityOfProduct="quantity"
      v-on:changeQuantityOfProduct="changeQuantityOfProduct"
      v-on:addToCart="addToCart"
    >
    </QuantitySelectionForm>
  </article>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from "vue";
import { useGoods } from "@/store/goods";
import { useCart } from "@/store/cart";
import GoodsImage from "@/components/GoodsImageComponent.vue";
import GoodsDescriptions from "@/components/GoodsDescriptionsComponent.vue";
import GoodsAvailability from "@/components/GoodsAvailabilityComponent.vue";
import GoodsPrice from "@/components/GoodsPriceComponent.vue";
import QuantitySelectionForm from "@/components/QuantitySelectionFormComponent.vue";

const quantity = ref(1);
const store = useGoods();
const storeCart = useCart();

onBeforeMount(() => window.scrollTo(0, 0));

const changeQuantityOfProduct = (newQuantity: number) =>
  (quantity.value = newQuantity);

const addToCart = () => {
  store.goods &&
    storeCart.add({ product: store.goods.product, quantity: quantity.value });
};

watch(quantity, (newValue) => {
  if (newValue <= 0) quantity.value = 1;
});
</script>

<style lang="scss">
.goods {
  display: flex;
  column-gap: 48px;
  color: var(--color-gray-dark);
  font-size: 1.2rem;

  @media (max-width: $breakpoint-tablet) {
    flex-direction: column;
    row-gap: 28px;
    padding-bottom: 31px;
  }
}
</style>
