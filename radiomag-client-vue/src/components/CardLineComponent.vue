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
import type { WorkerProduct } from "@/public/types";
import { ref } from "vue";
import { useCart } from "@/store/cart";
import CardLineImage from "@/components/CardLineImageComponent.vue";
import CardLineDescription from "@/components/CardLineDescriptionComponent.vue";
import ProductAvailability from "./ProductAvailability.vue";
import ProductPrice from "./ProductPrice.vue";
import QuantitySelectionForm from "./QuantitySelectionFormComponent.vue";

const props = defineProps<{
  product: WorkerProduct;
  filterHeaders: string[];
}>();

const storeCart = useCart();

const quantityOfProduct = ref(1);

const changeQuantityOfProduct = (quantity: number) =>
  (quantityOfProduct.value = quantity);

const addToCart = () =>
  storeCart.add({ product: props.product, quantity: quantityOfProduct.value });
</script>

<!-- <style lang="scss"> -->
<!-- Import as .scss module in assets/styles/cardLineComponent.scss -->
