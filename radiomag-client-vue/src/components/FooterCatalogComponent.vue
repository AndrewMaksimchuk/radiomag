<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useCatalog } from "@/store/catalog";

const store = useCatalog();
onBeforeMount(() => store.useMenu());
</script>

<template>
  <section class="footer-catalog">
    <a
      href="#"
      class="footer-catalog__item"
      v-for="item in store.catalog"
      :key="item.id"
    >
      <img
        class="footer-catalog__item-image"
        :src="'/images/catalog/' + item.img"
        alt=""
      />
      <h2 class="footer-catalog__item-text">{{ item.name }}</h2>
    </a>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  &-catalog {
    padding: 40px 0 28px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fafafa;

    @media (max-width: $breakpoint-mobile) {
      flex-direction: column;
      row-gap: 40px;
      border-top: 1px solid var(--color-gray-light);
      border-bottom: 1px solid var(--color-gray-light);
    }

    &__item {
      text-decoration: none;
      flex: 1;
      display: flex;
      align-items: center;
      color: var(--color-black-light);

      @media (max-width: $breakpoint-mobile) {
        justify-content: center;
      }

      &:hover {
        text-decoration: underline;
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
      }

      &-image {
        width: 60px;
        padding-right: 12px;
      }

      &-text {
        font-weight: 700;

        @media (max-width: $breakpoint-mobile) {
          width: 45%;
          font-size: 16px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
