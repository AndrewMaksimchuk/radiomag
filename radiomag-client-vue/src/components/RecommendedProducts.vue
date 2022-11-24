<template>
  <article class="recommended-products">
    <h2 class="recommended-products__header-text">Рекомендуємі товари</h2>
    <div class="recommended-products__item-list">
      <!-- Тут вставити карточки товара малого розміру і перебирати -->
      <!-- @@include('../cards-of-goods/small-goods-card.html')
      @@include('../cards-of-goods/small-goods-card.html')
      @@include('../cards-of-goods/small-goods-card.html')
      @@include('../cards-of-goods/small-goods-card.html')
      @@include('../cards-of-goods/small-goods-card.html')
      @@include('../cards-of-goods/small-goods-card.html')
      @@include('../cards-of-goods/small-goods-card.html')
      @@include('../cards-of-goods/small-goods-card.html') -->
    </div>
  </article>
</template>

<style lang="scss">
.recommended-products {
  width: 100%;
  padding-bottom: 26px;
  &__header-text {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 19px;
  }
  &__item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
