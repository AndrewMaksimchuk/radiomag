<template>
  <div
    class="image-show-big"
    @click="closeWindow">

    <img
      class="image-show-big__image"
      :style="{ 'padding-top': pageOffsetTop }"
      :src="bigImageSrc"
      :alt="bigImageAlt">

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

<script>
export default {
  name: 'ImageShowBig',
  computed: {
    bigImageSrc() {
      return this.$store.getters.getBigImage.imgSrc;
    },
    bigImageAlt() {
      return this.$store.getters.getBigImage.alt;
    },
    pageOffsetTop() {
      const tenOfWindow = window.innerHeight * 0.1;
      const offsetInPx = `${this.$store.getters.getBigImage.pageOffset + tenOfWindow}px`;
      return offsetInPx;
    },
  },
  methods: {
    closeWindow() {
      this.$store.commit('hiddenBigImage');
    },
  },
};
</script>

<style lang="scss">
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
