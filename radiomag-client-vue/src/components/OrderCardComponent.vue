<template>
  <tr class="order-card">
    <td class="order-card__row">
      <img
        v-if="goods.product.image"
        class="order-card__img"
        loading="lazy"
        :src="'https://www.rcscomponents.kiev.ua' + goods.product.image"
        :alt="goods.product.description[0]"
      />
      <img
        v-else
        class="order-card__img"
        loading="lazy"
        src="@/assets/images/empty.jpg"
        alt="empty image"
      />
    </td>

    <td class="order-card__row order-card__row_fix-size">
      <RouterLink
        class="common-link"
        :to="{ name: 'goods', params: { code: goods.product.id } }"
      >
        <h3>{{ goods.product.description[0] }}</h3>
      </RouterLink>
      <p>{{ $t("order.codeGoods") }}: {{ goods.product.id }}</p>
    </td>

    <td class="order-card__row">
      <ProductAvailability
        :inStock="goods.product.stock_data"
        :unit="goods.product.pcs"
      />
    </td>

    <td class="order-card__row">
      <ProductPrice :productPriceArray="goods.product.prices" />
    </td>

    <td class="order-card__row">
      <QuantitySelectionForm
        :isBayButtonVisible="false"
        :quantityOfProduct="goods.quantity ?? 1"
        v-on:changeQuantityOfProduct="changeQuantityOfProduct"
      />
    </td>

    <td class="order-card__row">
      <button class="order-card__button-delete" @click="store.remove(index)">
        <img
          class="order-card__button-delete-img"
          src="@/assets/images/delete.svg"
          alt="button delete product from cart"
        />
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { CartItem } from "@/store/cart";
import { useCart } from "@/store/cart";
import ProductAvailability from "./ProductAvailability.vue";
import ProductPrice from "./ProductPrice.vue";
import QuantitySelectionForm from "./QuantitySelectionFormComponent.vue";

const props = defineProps<{
  goods: CartItem;
  index: number;
}>();

const store = useCart();
const changeQuantityOfProduct = (value: number) =>
  store.changeQuantity({ code: props.goods.product.id, quantity: value });
</script>

<style lang="scss">
.order-card {
  width: 100%;

  &__row {
    padding: 20px 16px;
    vertical-align: top;

    &_fix-size {
      width: 450px;
    }
  }

  &__img {
    width: 164px;
  }

  &__button-delete {
    border: none;
    background: none;
    opacity: 0.6;

    &:hover {
      cursor: pointer;
    }

    &-img {
      width: 16px;
      padding-top: 16px;
    }
  }
}
</style>
