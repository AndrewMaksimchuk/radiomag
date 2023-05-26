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
      >
        <template #button>
          {{ $t("order.recount") }}
        </template>
      </QuantitySelectionForm>
    </td>

    <td class="order-card__row">
      <button class="order-card__button-delete" @click="remove">
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
import { PingService } from "@/services/PingService";
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

const remove = () => {
  PingService.ping({
    action: "action",
    todo: "cart remove",
    payload: props.goods,
  });
  store.remove(props.index);
};
</script>

<style lang="scss">
.order-card {
  @media (max-width: $breakpoint-tablet) {
    display: flex;
    flex-wrap: wrap;
  }

  &__row {
    padding: 20px 16px;
    vertical-align: top;

    @media (max-width: $breakpoint-tablet) {
      width: 100%;
      padding: 0;
      padding-bottom: 20px;
    }

    &:nth-child(1) {
      @media (max-width: $breakpoint-tablet) {
        width: 27%;
      }
    }

    &:nth-child(2) {
      @media (max-width: $breakpoint-tablet) {
        width: calc(100% - 27% - 15px);
        padding-left: 15px;
      }
    }

    &:nth-child(4) {
      @media (max-width: $breakpoint-tablet) {
        display: none;
      }
    }

    &:nth-child(5) {
      @media (max-width: $breakpoint-tablet) {
        padding: 0;
      }
    }

    &:nth-child(6) {
      @media (max-width: $breakpoint-tablet) {
        display: grid;
      }
    }

    &_fix-size {
      width: 450px;

      @media (max-width: $breakpoint-tablet) {
        width: auto;
      }
    }
  }

  &__img {
    width: 164px;
    object-fit: contain;

    @media (max-width: $breakpoint-tablet) {
      width: 100%;
    }
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
