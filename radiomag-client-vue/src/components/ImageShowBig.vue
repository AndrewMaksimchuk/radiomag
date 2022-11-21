<template>
  <div
    class="image-show-big"
    v-if="store.isVisible"
    @click="closeWindow">

    <img
      class="image-show-big__image"
      :style="{ 'padding-top': pageOffsetTop }"
      :src="store.data.src"
      :alt="store.data.alt">

      <button
        class="image-show-big__button-close"
        :style="{ 'top': pageOffsetTop }"
        @click="closeWindow">
          <img
            class="image-show-big__button-close-img"
            src="@/assets/images/close.svg"
            alt="Close button">
        </button>

  </div>
</template>

<script setup>
import { useImageShow } from '@/store/imageShow';

const store = useImageShow();
const closeWindow = () => store.hide();

//   computed: {
//     pageOffsetTop() {
//       const tenOfWindow = window.innerHeight * 0.1;
//       return `${this.$store.getters.getBigImage.pageOffset + tenOfWindow}px`;
//       const offsetInPx = `${this.$store.getters.getBigImage.pageOffset + tenOfWindow}px`;
//       return offsetInPx;
//     },
//   },
</script>

<style lang="scss">
// TODO: Change to display: fixed; !!!
.image-show-big {
  position: absolute;
  background-color: var(--color-black-light);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &__image {
    width: 80vh;
  }

  &__button-close {
    border: none;
    background: none;
    position: absolute;
    left: 10vh;

    &:hover {
      cursor: pointer;
    }

    &-img {
      --icon-size: 44px;
      width: var(--icon-size);
      height: var(--icon-size);
    }
  }
}
</style>
