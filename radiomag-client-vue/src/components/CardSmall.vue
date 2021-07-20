<template>
  <article class="small-goods-card">
    <img
      class="small-goods-card__image"
      src="https://www.rcscomponents.kiev.ua/modules/Asers_Shop/images/productimages/hantek-2c42-2ch-dmm-40mhz-250msa-s-1ch-1.jpg"
      alt=""
    />
    <h3 class="small-goods-card__header-text">
      <a class="reset-text-decor color--black-light" href="#">Назва товара</a>
    </h3>
    <p class="small-goods-card__description">Портативний 2х канальний осцилограф з мультиметром.</p>
  </article>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss">
.small-goods-card {
  box-sizing: border-box;
  width: 170px;
  height: 218px;
  padding: 22px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
  &__image {
    width: 100px;
    height: 100px;
    padding-bottom: 9px;
  }
  &__header-text {
    width: 100%;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 17px;
    font-weight: 700;
    color: var(--color-black-light);
  }
  &__header-text:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &__description {
    width: 100%;
    font-size: 1.1rem;
    color: var(--color-gray-dark);
    line-height: 18px;
    text-align: center;
  }
}
</style>
