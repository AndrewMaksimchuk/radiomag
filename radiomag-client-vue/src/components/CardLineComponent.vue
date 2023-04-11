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

<style lang="scss">
.card-line {
  width: 100%;
  min-height: 175px;
  border: 1px solid var(--color-gray-light);
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: var(--blue-white);
  }

  @media (max-width: $breakpoint-tablet) {
    min-height: auto;
    flex-direction: column;
  }

  &__left {
    width: 150px;
    padding: 18px 14px;

    @media (max-width: $breakpoint-tablet) {
      width: 100%;
    }

    &-button {
      width: 100%;
      padding: 6px 10px;
      border: none;
      background: none;
      background-color: var(--blue-medium);
      color: var(--color-white);
      font-size: 1.1rem;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  &__center {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 18px 14px;
    color: var(--color-black-light);
    font-size: 1.2rem;

    @media (max-width: $breakpoint-tablet) {
      width: 100%;
      flex-wrap: wrap;
      column-gap: 28px;
    }

    &-availability {
      padding-right: 28px;
      flex: 1;

      @media (max-width: $breakpoint-tablet) {
        padding: 0;
      }

      &-header-text {
        padding-bottom: 20px;
      }
    }

    &-price {
      flex: 1;

      &-header-text {
        padding-bottom: 20px;
      }
    }
  }

  &__right {
    width: 170px;
    min-height: 100%;
    background-color: var(--color-gray-white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 11px;

    @media (max-width: $breakpoint-tablet) {
      width: 100%;
    }

    &-form {
      width: 128px;
      position: relative;

      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        padding: 22px;
        display: flex;
        gap: 40px;
      }

      &-line {
        width: 100%;
        padding: 11px 0;
        display: flex;

        @media (max-width: $breakpoint-tablet) {
          height: 42px;
          align-items: center;
        }
      }
    }

    &-input {
      width: 36px;
      height: 32px;
      border: none;
      flex: 1;
      text-align: center;

      &:focus {
        text-decoration: none;
        z-index: 999;
      }
    }

    &-button {
      width: 30px;
      height: 32px;
      background-color: var(--blue-light);
      color: var(--color-white);
      border: none;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        text-decoration: none;
        z-index: 999;
      }
    }

    &-button-buy {
      width: 100%;
      border: none;
      background: none;
      background-color: var(--color-red);
      color: var(--color-white);
      font-size: 1.4rem;
      padding: 14px 0;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      @media (max-width: $breakpoint-tablet) {
        height: 42px;
      }
    }
  }
}
</style>
