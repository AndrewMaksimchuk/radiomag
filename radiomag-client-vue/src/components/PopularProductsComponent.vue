<template>
  <div class="popular-products" v-if="store.length">
    <h2 class="popular-products__heaer-text">{{ $t("popularProducts") }}</h2>
    <Slider />
  </div>
</template>

<script setup lang="ts">
import { useSlider } from "@/store/slider";
import Slider from "./SliderComponent.vue";

const store = useSlider();
store.load();
</script>

<style lang="scss">
.popular-products {
  &__heaer-text {
    font-size: 1.8rem;
    padding-bottom: 22px;
  }
}
</style>
