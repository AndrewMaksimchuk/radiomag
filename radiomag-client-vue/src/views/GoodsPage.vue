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
import { useRoute } from "vue-router";
import { useGoods } from "@/store/goods";
import { useCart } from "@/store/cart";
import { useBreadcrumbs } from "@/store/breadcrumbs";
import { PingService } from "@/services/PingService";
import GoodsImage from "@/components/GoodsImageComponent.vue";
import GoodsDescriptions from "@/components/GoodsDescriptionsComponent.vue";
import GoodsAvailability from "@/components/GoodsAvailabilityComponent.vue";
import GoodsPrice from "@/components/GoodsPriceComponent.vue";
import QuantitySelectionForm from "@/components/QuantitySelectionFormComponent.vue";

const quantity = ref(1);
const store = useGoods();
const storeCart = useCart();
const route = useRoute();
const storeBreadcrumbs = useBreadcrumbs();

onBeforeMount(() => {
  if (store.goods?.product.articul) {
    const breadcrumbsUpdate = {
      name: store.goods?.product.articul,
      path: route.fullPath,
    };
    route.meta.breadcrumbs?.set(breadcrumbsUpdate);
    storeBreadcrumbs.updateOne(route.fullPath, breadcrumbsUpdate);
  }
});

const changeQuantityOfProduct = (newQuantity: number) =>
  (quantity.value = newQuantity);

const addToCart = () => {
  if (store.goods) {
    const payload = { product: store.goods.product, quantity: quantity.value };
    PingService.ping({ action: "action", todo: "cart add", payload });
    storeCart.add(payload);
  }
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
