<template>
  <div class="image-show-big" v-if="store.isVisible" @click="closeWindow">
    <img
      class="image-show-big__image"
      :src="store.data.src"
      :alt="store.data.alt"
    />
  </div>
</template>

<script setup lang="ts">
import { useImageShow } from "@/store/imageShow";

const store = useImageShow();
const closeWindow = () => store.hide();
</script>

<style lang="scss">
.image-show-big {
  position: fixed;
  background-color: var(--color-black-light-alpha);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding-top: 10vmin;

  @media (max-width: $breakpoint-mobile) {
    padding-top: 50vmin;
  }

  &__image {
    display: block;
    margin: auto;
    max-width: 80vmin;
    height: auto;
    object-fit: contain;
  }
}
</style>
