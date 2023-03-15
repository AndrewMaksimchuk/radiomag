<template>
  <div class="card-line__right">
    <slot></slot>
    <form class="card-line__right-form">
      <span class="notification-added-to-cart" v-if="isAddedToCart">
        {{ $t("card.addedCart") }}
      </span>

      <section class="card-line__right-form-line">
        <button
          class="card-line__right-button"
          @click.prevent="changeQuantityOfProduct('-')"
        >
          -
        </button>
        <input
          class="card-line__right-input"
          type="text"
          v-model="inputValue"
          @input="changeInputValue()"
          @click="selectText"
        />
        <button
          class="card-line__right-button"
          @click.prevent="changeQuantityOfProduct('+')"
        >
          +
        </button>
      </section>

      <button class="card-line__right-button-buy" @click.prevent="addToCart">
        {{ $t("card.buy") }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from "vue";

const props = defineProps<{
  quantityOfProduct: number;
}>();

const emits = defineEmits<{
  (e: "addToCart"): void;
  (e: "changeQuantityOfProduct", value: number): void;
}>();

const inputValue = ref(1);
const isAddedToCart = ref(false);

const isZero = (quantity: number) => quantity === 0;
const isGreaterThatZero = (quantity: number) => quantity > 0;

watch(props, (value, oldValue) => {
  inputValue.value = value.quantityOfProduct;
  console.log({ value, oldValue });
});

watch(inputValue, (value) =>
  typeof value === "string"
    ? (inputValue.value = parseInt(value, 10))
    : undefined
);

onBeforeMount(() => (inputValue.value = props.quantityOfProduct));

const updateInputValue = () => {
  return isGreaterThatZero(inputValue.value)
    ? inputValue.value
    : (inputValue.value = props.quantityOfProduct);
};

const changeInputValue = () => {
  updateInputValue();
  emits("changeQuantityOfProduct", inputValue.value);
};

const changeQuantityOfProduct = (sign: "+" | "-") => {
  let returnQuantityOfProduct = 0;

  sign === "+"
    ? (returnQuantityOfProduct = inputValue.value + 1)
    : (returnQuantityOfProduct = inputValue.value - 1);

  return isZero(returnQuantityOfProduct)
    ? undefined
    : emits("changeQuantityOfProduct", returnQuantityOfProduct);
};

const showNotificationIsAddedToCart = () => {
  isAddedToCart.value = true;
  setTimeout(() => (isAddedToCart.value = false), 1000);
};

const addToCart = () => {
  emits("addToCart");
  showNotificationIsAddedToCart();
};

const isHTMLElement = (element: EventTarget): element is HTMLInputElement =>
  element instanceof HTMLInputElement;

const selectText = (event: MouseEvent) => {
  if (event.target && isHTMLElement(event.target)) {
    event.target.select();
  }
};
</script>

<style lang="scss">
.notification-added-to-cart {
  width: 100%;
  padding: 3px;
  font-size: 1.2rem;
  text-align: center;
  position: absolute;
  top: -18px;
  background-color: var(--color-black-light);
  border-radius: 3px;
  color: var(--color-white);

  @media (max-width: $breakpoint-tablet) {
    top: 0;
    width: calc(100% - 2 * 22px);
  }
}
</style>
