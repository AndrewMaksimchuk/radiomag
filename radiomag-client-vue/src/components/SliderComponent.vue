<template>
  <article class="slider">
    <div class="slider__cards">
      <CardSmall
        v-for="(data, index) in store.toShow"
        :key="index"
        :data="data"
      />
    </div>

    <div class="slider__controls">
      <SliderButton
        v-for="btnNumber in store.numberOfButtons"
        :key="btnNumber"
        :isActive="store.activeButton === btnNumber"
        @click="store.active(btnNumber)"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { useSlider } from "@/store/slider";
import CardSmall from "./CardSmall.vue";
import SliderButton from "./SliderButton.vue";

const store = useSlider();
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
