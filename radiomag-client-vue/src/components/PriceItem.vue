<template>
  <span>{{ priceFixed }}&nbsp;{{ currency }}</span>
</template>

<script>
export default {
  name: 'PriceItem',
  props: {
    price: {
      type: [Number, String],
      default: '-',
    },
    currency: {
      type: String,
      default: 'грн',
    },
  },
  computed: {
    priceFixed() {
      return this.price.toFixed(2);
    },
  },
};
</script>
