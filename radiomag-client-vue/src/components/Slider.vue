<template>
  <article class="slider">

    <div class="slider__cards">
        <CardSmall
        v-for="(data, index) in cardDataToShow"
        :key="index"
        :data="data"/>
    </div>

    <div class="slider__controls">
      <SliderButton
        v-for="(butt, index) in numberOfButtons"
        :key="index"
        :activeButton="activeButton"
        :index="index"
        v-on:makeActive="makeActive"
        />
    </div>

  </article>
</template>

<script>
import { getSliderData } from '@/services';
import CardSmall from './CardSmall.vue';
import SliderButton from './SliderButton.vue';

export default {
  name: 'Slider',
  components: {
    CardSmall,
    SliderButton,
  },
  data() {
    return {
      activeButton: 0,
    };
  },
  computed: {
    numberOfButtons() {
      const numberOfButtons = [];
      numberOfButtons.length = 3;
      numberOfButtons.fill(1);
      return numberOfButtons;
    },
    cardDataToShow() {
      const start = this.activeButton * 5;
      const end = start + 5;
      return getSliderData.slice(start, end);
    },
  },
  methods: {
    makeActive(index) {
      this.activeButton = index;
    },
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
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 11px;
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
