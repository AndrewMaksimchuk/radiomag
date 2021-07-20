<template>
  <article class="slider">
    <div class="slider__cards">
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
    </div>
    <div class="slider__controls">
      <div
        class="slider__controls-button slider__controls-button_active"
        data-slider-button-1
      ></div>
      <div class="slider__controls-button" data-slider-button-2></div>
      <div class="slider__controls-button" data-slider-button-3></div>
      <div class="slider__controls-button" data-slider-button-4></div>
      <div class="slider__controls-button" data-slider-button-5></div>
    </div>
  </article>
</template>

<script>
import CardSmall from './CardSmall.vue';

export default {
  name: 'Slider',
  components: {
    CardSmall,
  },
};
</script>

<style lang="scss">
.slider {
  width: 100%;
  padding-bottom: 26px;
  &__cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 23px;
  }
  &__controls {
    display: flex;
    justify-content: center;
    column-gap: 11px;

    &-button {
      --size: 12px;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      background-color: var(--color-gray-light);

      &:hover {
        cursor: pointer;
      }

      &_active {
        border: 4px solid var(--color-blue-dark);
      }
    }
  }
}
</style>
