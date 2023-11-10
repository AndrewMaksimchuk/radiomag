<template>
  <article class="card-line">
    <div class="card-line__left">
      <CardLineImage
        :img="product?.image ?? ''"
        :alt="product.description[0]"
      />
    </div>

    <div class="card-line__center">
      <CardLineDescription :product="product" :filter-headers="filterHeaders" />

      <div class="card-line__center-availability">
        <h3 class="card-line__center-availability-header-text">
          {{ $t("card.availability") }}:
        </h3>
        <ProductAvailability
          :inStock="product.stock_data"
          :unit="product.pcs"
        />
      </div>

      <div class="card-line__center-price">
        <h3 class="card-line__center-price-header-text">
          {{ $t("card.price") }}:
        </h3>
        <ProductPrice :productPriceArray="product.prices" />
      </div>
    </div>

    <QuantitySelectionForm
      :quantityOfProduct="quantityOfProduct"
      v-on:changeQuantityOfProduct="changeQuantityOfProduct"
      v-on:addToCart="addToCart"
    />
  </article>
</template>

<script setup lang="ts">
import type { WorkerProduct } from "$/dto/Product";
import { ref } from "vue";
import { QuantitySelectionForm } from "@/components";
import { useAddToCart } from "./functions/useAddToCart";
import CardLineImage from "@/components/CardLineImageComponent.vue";
import { CardLineDescription } from "@/components";
import ProductAvailability from "@/components/ProductAvailability.vue";
import ProductPrice from "@/components/ProductPrice.vue";

const props = defineProps<{
  product: WorkerProduct;
  filterHeaders: string[];
}>();

const quantityOfProduct = ref(1);
const addToCart = useAddToCart(props, quantityOfProduct);
const changeQuantityOfProduct = (quantity: number) => {
  return (quantityOfProduct.value = quantity);
};
</script>
