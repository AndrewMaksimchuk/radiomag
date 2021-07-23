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
          ref="input"
          :value="quantityOfProduct"
          @input="changeInputValue($event)">
        <button
          class="card-line__right-button"
          @click.prevent="changeQuantityOfProduct('+')">+</button>
      </section>
      <button
        class="card-line__right-button-buy"
        v-if="isBayButtonVisible"
        @click.prevent="addToCart">
          Купити
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'QuantitySelectionForm',
  props: {
    quantityOfProduct: {
      type: Number,
      required: true,
    },
    isBayButtonVisible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      inputValue: 1,
      isAddedToCart: false,
    };
  },
  created() {
    this.inputValue = this.quantityOfProduct;
  },
  methods: {
    updateInputValue() {
      const val = parseInt(this.$refs.input.value, 10);
      if (val > 0) {
        this.inputValue = val;
      }
      console.log('this.inputValue: ', this.inputValue);
    },
    changeInputValue() {
      this.updateInputValue();
      this.$emit('changeQuantityOfProduct', this.inputValue);
    },
    changeQuantityOfProduct(sign) {
      this.updateInputValue();
      let returnQuantityOfProduct = null;

      if (sign === '+') {
        returnQuantityOfProduct = this.inputValue + 1;
      } else {
        returnQuantityOfProduct = this.inputValue - 1;
        if (returnQuantityOfProduct === 0) return;
      }

      this.$emit('changeQuantityOfProduct', returnQuantityOfProduct);
    },
    showNotificationIsAddedToCart() {
      this.isAddedToCart = true;
      setTimeout(() => {
        this.isAddedToCart = false;
      }, 1000);
    },
    addToCart() {
      this.$emit('addToCart');
      this.showNotificationIsAddedToCart();
    },
  },
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
}
</style>
