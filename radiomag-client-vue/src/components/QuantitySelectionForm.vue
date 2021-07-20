<template>
  <div class="card-line__right">
    <slot></slot>
    <form class="card-line__right-form">
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
        @click.prevent="addToCart">Купити</button>
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
  },
  data() {
    return {
      inputValue: 1,
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
    addToCart() {
      this.$emit('addToCart');
    },
  },
};
</script>
