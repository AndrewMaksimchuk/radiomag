<template>
  <section
    class="order-form">

    <p class="order-form__total-cost">Загальна вартість: <span>{{ totalCost }}</span></p>

    <div class="order-form__buttons-group">
      <button
        class="order-form__button order-form__button_color-gray"
        @click="clearCart">
          Очистити корзину
        </button>
      <router-link
        :to="{ name: 'products' }">
        <button
          class="order-form__button order-form__button_color-gray">
          Продовжити покупку
        </button>
      </router-link>
      <button
        class="order-form__button order-form__button_color-red">
        Оформити замовлення
      </button>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OrderForm',
  computed: {
    ...mapGetters(['getCart']),
    totalCost() {
      function getTotalPriceOfProduct(prod) {
        const { quantity } = prod;
        const { prices } = prod.product;
        const clonePrices = [...prices];

        function getPrice(val) {
          const { q } = val;
          return quantity >= q;
        }

        const priceObject = clonePrices.reverse().filter(getPrice);
        const priceForCalculation = priceObject[0].p;
        return quantity * priceForCalculation;
      }

      function reduce(acc, curr) {
        return acc + getTotalPriceOfProduct(curr);
      }

      const totalCostValue = this.getCart.reduce(reduce, 0);

      return totalCostValue.toFixed(2);
    },
  },
  methods: {
    clearCart() {
      this.$store.commit('clearCart');
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.order-form {
  width: 100%;
  min-height: 146px;
  padding: 26px 147px;
  background-color: var(--color-gray-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  &__total-cost {
    font-size: 1.6rem;
  }

  &__buttons-group {
    display: flex;
    column-gap: 13px;
  }

  &__button {
    padding: 13px 26px;
    border: none;
    color: var(--color-white);
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }

    &_color-gray {
      background-color: var(--color-gray-dark);
    }

    &_color-red {
      background-color: var(--color-red);
    }
  }
}
</style>
