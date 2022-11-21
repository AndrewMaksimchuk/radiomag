<template>
  <div class="card-line__right">
    <slot></slot>
    <form class="card-line__right-form">

      <span
        class="notification-added-to-cart"
        v-if="isAddedToCart">
        Додано до корзини
      </span>

      <section class="card-line__right-form-line">
        <button
          class="card-line__right-button"
          @click.prevent="changeQuantityOfProduct('-')">-</button>
        <input
          class="card-line__right-input"
          type="text"
          v-model="inputValue"
          @input="changeInputValue($event)">
        <button
          class="card-line__right-button"
          @click.prevent="changeQuantityOfProduct('+')">+</button>
      </section>

      <button
        class="card-line__right-button-buy"
        @click.prevent="addToCart">
          Купити
      </button>

    </form>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue';

const props = defineProps({
      quantityOfProduct: {
        type: Number,
        required: true,
    }
});

const emits = defineEmits(['addToCart', 'changeQuantityOfProduct']);

const inputValue = ref(1);
const isAddedToCart = ref(false);

const isZero = (quantity) => quantity === 0;
const isGreaterThatZero = (quantity) => quantity > 0;
const toNumber = (num) => parseInt(num, 10);

watch(props, (value, oldValue) => {
  inputValue.value = value.quantityOfProduct;
  console.log({value, oldValue});
});

onBeforeMount(() => inputValue.value = props.quantityOfProduct);

const updateInputValue = () => {
  const val = parseInt(inputValue.value, 10);
  return isGreaterThatZero(val) 
    ? inputValue.value = val
    : inputValue.value = props.quantityOfProduct;
}

const changeInputValue = () => {
  updateInputValue();
  emits('changeQuantityOfProduct', inputValue.value);
}

const changeQuantityOfProduct = (sign) => {
  let returnQuantityOfProduct = 0;
  
  sign === '+' 
    ? returnQuantityOfProduct = toNumber(inputValue.value) + 1
    : returnQuantityOfProduct = toNumber(inputValue.value) - 1

  return isZero(returnQuantityOfProduct)
    ? undefined
    : emits('changeQuantityOfProduct', returnQuantityOfProduct);
}

const showNotificationIsAddedToCart = () => {
  isAddedToCart.value = true;
  setTimeout(() => isAddedToCart.value = false, 1000);
}

const addToCart = () => {
  emits('addToCart');
  showNotificationIsAddedToCart();
}
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
  }
</style>