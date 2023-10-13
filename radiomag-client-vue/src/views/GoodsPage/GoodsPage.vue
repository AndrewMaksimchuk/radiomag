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
<style lang="scss" src="./style.scss"></style>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useGoods } from "@/store/goods";
import { useCart } from "@/store/cart";
import { PingService } from "@/services/PingService";
import { useHooks } from "./functions/hooks";
import { QuantitySelectionForm } from "@/components";
import GoodsImage from "@/components/GoodsImageComponent.vue";
import GoodsDescriptions from "@/components/GoodsDescriptionsComponent.vue";
import GoodsAvailability from "@/components/GoodsAvailabilityComponent.vue";
import GoodsPrice from "@/components/GoodsPriceComponent.vue";

const quantity = ref(1);
const store = useGoods();
const storeCart = useCart();
useHooks(store);

const changeQuantityOfProduct = (newQuantity: number) => {
  return (quantity.value = newQuantity);
};

const addToCart = () => {
  if (store.goods) {
    const payload = { product: store.goods.product, quantity: quantity.value };
    PingService.ping({ action: "action", todo: "cart add", payload });
    storeCart.add(payload);
  }
};

watch(quantity, (newValue) => {
  if (0 >= newValue) {
    quantity.value = 1;
  }
});
</script>
