<template>
  <div class="error">
    <h2 class="error__header-text">Упс...</h2>
    <h3 class="error__description-text">Сторінку не знайдено 404</h3>
    <span class="error__icon">&#9785;</span>
  </div>
</template>

<style lang="scss">
.error {
  position: relative;
  padding-bottom: 46px;
  color: var(--blue-medium);

  &__header-text {
    font-size: 15rem;

    @media (max-width: $breakpoint-tablet) {
      font-size: 7rem;
    }
  }

  &__description-text {
    font-size: 10rem;

    @media (max-width: $breakpoint-tablet) {
      font-size: 5rem;
    }
  }

  &__icon {
    position: absolute;
    top: -1rem;
    left: 65%;
    font-size: 15rem;
    transform: rotate(20deg);
    opacity: 0.1;
  }
}
</style>
