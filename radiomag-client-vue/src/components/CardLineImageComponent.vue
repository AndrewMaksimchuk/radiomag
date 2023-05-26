<script setup lang="ts">
import { useImageShow } from "@/store/imageShow";

const props = defineProps<{
  img: string;
  alt: string;
}>();

const storeImageShow = useImageShow();

const showBigImage = () => {
  const src = `https://www.rcscomponents.kiev.ua${props.img}`;
  const alt = props.alt;
  storeImageShow.show({ src, alt });
};
</script>

<template>
  <img
    v-if="img"
    class="card-line__left-img"
    loading="lazy"
    :src="'https://www.rcscomponents.kiev.ua' + img"
    :alt="alt"
    @click="showBigImage"
  />
  <img
    v-else
    class="card-line__left-img"
    loading="lazy"
    src="@/assets/images/empty.jpg"
    alt="empty image"
  />
</template>

<style lang="scss">
.card-line {
  &__left {
    &-img {
      width: 120px;
      height: 100%;
      padding-bottom: 10px;
      object-fit: contain;

      &:hover {
        cursor: pointer;
      }

      @media (max-width: $breakpoint-tablet) {
        width: 100%;
      }
    }
  }
}
</style>
