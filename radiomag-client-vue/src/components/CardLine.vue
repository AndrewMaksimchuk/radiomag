<template>
  <article class="card-line">
    <div class="card-line__left">
      <img
        class="card-line__left-img"
        :src="'https://www.rcscomponents.kiev.ua' + product.image"
        :alt="String(product.description[0])"
        loading="lazy"
        @click="showBigImage"
      />
    </div>

    <div class="card-line__center">
      <div class="card-line__center-description">
        <RouterLink
          class="card-line__center-description-header-text"
          :to="{ name: 'goods', params: { code: product.id } }"
          @click="addGoodsToStorage"
        >
          <h3>{{ product.description[0] }}</h3>
        </RouterLink>

        <div class="card-line__center-description-small">
          <RouterLink
            class="common-link"
            :to="{ name: 'goods', params: { code: product.id } }"
            @click="addGoodsToStorage"
          >
            <p class="card-line__center-description-small-paragraph">
              Код товара:
              <span
                class="card-line__center-description-small-paragraph_light-color"
              >
                {{ product.id }}
              </span>
            </p>
          </RouterLink>

          <p
            v-if="product.description[1]"
            class="card-line__center-description-small-paragraph"
          >
            Виробник:
            <span
              class="card-line__center-description-small-paragraph_light-color"
            >
              {{ product.description[1] }}</span
            >
          </p>
        </div>

        <p class="card-line__center-description-main-text">
          {{ sumOfAllDescription }}
        </p>

        <p class="card-line__center-description-tech-info">
          <img
            class="card-line__center-description-tech-info-icon"
            src="/images/pdf.svg"
            alt="file specification"
          />
          <a
            class="card-line__center-description-tech-info-link"
            href="#"
            @click.prevent="showSpecification"
            >Технічна інформація</a
          >
        </p>
      </div>

      <div class="card-line__center-availability">
        <h3 class="card-line__center-availability-header-text">Наявність:</h3>
        <ProductAvailability
          :inStock="product.stock_data"
          :unit="product.pcs"
        />
      </div>

      <div class="card-line__center-price">
        <h3 class="card-line__center-price-header-text">Ціна:</h3>
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
import { ref, computed } from "vue";
import { useCart } from "@/store/cart";
import { useGoods } from "@/store/goods";
import { useImageShow } from "@/store/imageShow";

import ProductAvailability from "./ProductAvailability.vue";
import ProductPrice from "./ProductPrice.vue";
import QuantitySelectionForm from "./QuantitySelectionForm.vue";

const props = defineProps<{
  product: WorkerProduct;
  filterHeaders: string[];
}>();

const storeCart = useCart();
const storeImageShow = useImageShow();
const storeGoods = useGoods();

const quantityOfProduct = ref(1);

const sumOfAllDescription = computed(() =>
  props.product.description.reduce((total, currentValue, index) => {
    if (index === 0 || currentValue === undefined) return total;
    return `${total + currentValue} `;
  }, "")
);

const changeQuantityOfProduct = (quantity: number) =>
  (quantityOfProduct.value = quantity);

const addToCart = () =>
  storeCart.add({ product: props.product, quantity: quantityOfProduct.value });

const showBigImage = () => {
  const src = `https://www.rcscomponents.kiev.ua${props.product.image}`;
  const alt = props.product.description[0];
  storeImageShow.show({ src, alt });
};

const showSpecification = () =>
  console.log(
    "Показати специфікацію на прилад у модальному вікні(відкрити, відобразити .pdf файл)"
  );

const addGoodsToStorage = () =>
  storeGoods.add({
    product: props.product,
    filterHeaders: props.filterHeaders,
  });
</script>

<style lang="scss">
.card-line {
  width: 100%;
  height: 175px;
  border: 1px solid var(--color-gray-light);
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: var(--blue-white);
  }

  &__left {
    width: 150px;
    padding: 18px 14px;

    &-img {
      width: 120px;
      height: 100%;
      padding-bottom: 10px;
      object-fit: contain;

      &:hover {
        cursor: pointer;
      }
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

    &-description {
      flex: 6;
      color: var(--color-gray-dark);
      padding-right: 28px;

      &-header-text {
        display: block;
        text-decoration: none;
        color: var(--color-black-light);
        font-size: 1.4rem;
        padding-bottom: 20px;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      &-small {
        padding-bottom: 6px;

        &-paragraph {
          color: var(--color-black-light);
          font-weight: 700;
          padding-bottom: 10px;

          &_light-color {
            color: var(--color-gray-dark);
            font-weight: 400;
          }
        }
      }

      &-main-text {
        line-height: 1.8rem;
        padding-bottom: 12px;
      }

      &-tech-info {
        display: flex;
        align-items: center;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        &-icon {
          width: 18px;
          height: 18px;
          padding-right: 5px;
        }

        &-link {
          text-decoration: none;
          color: inherit;
        }
      }
    }

    &-availability {
      padding-right: 28px;
      flex: 1;

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

    &-form {
      width: 128px;
      position: relative;

      &-line {
        width: 100%;
        padding: 11px 0;
        display: flex;
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
    }
  }
}
</style>
