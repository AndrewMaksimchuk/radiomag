<template>
  <article
    class="card-line">

    <div class="card-line__left">
      <img
        class="card-line__left-img"
        :src="'https://www.rcscomponents.kiev.ua' + product.image"

        :alt="product.description[0]"
        loading="lazy"
        @click="showBigImage">
      <!-- <button
        class="card-line__left-button"
        @click="showPossibleReplacements">
        Можливі заміни</button> -->
    </div>

    <div class="card-line__center">

      <div class="card-line__center-description">

        <router-link
          class="card-line__center-description-header-text"
          :to="{ name: 'goods', params: { code: product.id } }"
          @click="addGoodsToStorage">
            <h3>{{ product.description[0] }}</h3>
        </router-link>

        <div class="card-line__center-description-small">

          <router-link
            :to="{ name: 'goods', params: { code: product.id } }"
            @click="addGoodsToStorage">
            <p
              class="card-line__center-description-small-paragraph">
              Код товара:
              <span
                class="card-line__center-description-small-paragraph_light-color">
                {{ product.id }}</span>
            </p>
          </router-link>

          <p
            v-if="product.description[1]"
            class="card-line__center-description-small-paragraph">
            Виробник:
            <span
              class="card-line__center-description-small-paragraph_light-color">
              {{ product.description[1] }}</span>
          </p>
        </div>

        <p class="card-line__center-description-main-text">{{ sumOfAllDescription }}</p>

        <p class="card-line__center-description-tech-info">
          <img class="card-line__center-description-tech-info-icon"
            src="/images/pdf.svg"
            alt="file specification">
          <a
            class="card-line__center-description-tech-info-link"
            href="#"
            @click.prevent="showSpecification">Технічна інформація</a>
        </p>

      </div>

      <div class="card-line__center-availability">
        <h3 class="card-line__center-availability-header-text">Наявність: </h3>
        <ProductAvailability
          :inStock="product.stock_data"
          :unit="product.pcs"/>
      </div>

      <div class="card-line__center-price">
        <h3 class="card-line__center-price-header-text">Ціна: </h3>
        <ProductPrice :productPriceArray="product.prices"/>
      </div>

    </div>

    <QuantitySelectionForm
      :quantityOfProduct="quantityOfProduct"
      v-on:changeQuantityOfProduct="changeQuantityOfProduct"
      v-on:addToCart="addToCart"/>

  </article>
</template>

<script>
import ProductAvailability from './ProductAvailability.vue';
import ProductPrice from './ProductPrice.vue';
import QuantitySelectionForm from './QuantitySelectionForm.vue';

export default {
  name: 'Card-line',
  components: {
    ProductAvailability,
    ProductPrice,
    QuantitySelectionForm,
  },
  props: {
    product: {
      required: true,
      type: Object,
    },
    filterHeaders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      quantityOfProduct: 1,
    };
  },
  methods: {
    changeQuantityOfProduct(quantity) {
      this.quantityOfProduct = quantity;
    },
    sumDescription(total, currentValue, index) {
      if (index === 0 || currentValue === undefined) return total;
      return `${total + currentValue} `;
    },
    addToCart() {
      this.$store.commit('addGoodsToCart', { product: this.product, quantity: this.quantityOfProduct });
    },
    showBigImage() {
      const imgSrc = `https://www.rcscomponents.kiev.ua${this.product.image}`;
      const pageOffset = window.pageYOffset;
      const alt = this.product.description[0];
      this.$store.commit('showBigImage', { imgSrc, pageOffset, alt });
    },
    showPossibleReplacements() {
      console.log('Показати можливі заміни у модальному вікні');
    },
    showSpecification() {
      console.log('Показати специфікацію на прилад у модальному вікні(відкрити, відобразити .pdf файл)');
    },
    addGoodsToStorage() {
      this.$store.commit('addGoods',
        { product: this.product, filterHeaders: this.filterHeaders });
    },
  },
  watch: {
    quantityOfProduct() {
      if (this.quantityOfProduct <= 0) {
        this.quantityOfProduct = 1;
      }
    },
  },
  computed: {
    sumOfAllDescription() {
      return this.product.description.reduce(this.sumDescription, '');
    },
  },
};
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

  &__left {
    width: 150px;
    padding: 18px 14px;

    &-img {
      width: 120px;
      height: 90px;
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
