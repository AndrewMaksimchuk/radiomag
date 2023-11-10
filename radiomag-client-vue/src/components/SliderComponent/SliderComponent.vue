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
<style lang="scss" src="./style.scss"></style>
<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useSlider } from "@/store/slider";
import { getScreenCurrentWidth } from "@/utils/screenCurrentWidth";
import { getScreenBreakpoint } from "@/utils/screenBreakpoint";
import { CardSmall } from "@/components";
import SliderButton from "@/components/SliderButton.vue";

const store = useSlider();

const onResize = () => {
  const width = getScreenCurrentWidth();
  const breakpoint = parseInt(getScreenBreakpoint("--breakpoint-tablet"));
  if (width <= breakpoint && 2 !== store.numberOfShowedCards) {
    store.setNumberShowedCards(2);
  }
  if (width > breakpoint && 2 === store.numberOfShowedCards) {
    store.setNumberShowedCards();
  }
};

onBeforeMount(() => {
  onResize();
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  return window.removeEventListener("resize", onResize);
});
</script>
