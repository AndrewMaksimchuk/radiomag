<template>
  <article class="small-goods-card">
    <img
      class="small-goods-card__image"
      :src="data.imgsrc"
      :alt="data.title"
    />
    <h3 class="small-goods-card__header-text">
      <a class="reset-text-decor color--black-light" href="#">{{ data.title }}</a>
    </h3>
    <p class="small-goods-card__description">{{ data.description }}</p>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
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
