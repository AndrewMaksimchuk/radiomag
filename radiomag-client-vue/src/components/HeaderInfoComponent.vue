<script setup lang="ts">
import type { StateMenu } from "./ButtonMenuComponent.vue";
import { ref } from "vue";
import HeaderInfoContacts from "./HeaderInfoContactsComponent.vue";
import HeaderUserAction from "./HeaderUserActionComponent.vue";
import HeaderCart from "./HeaderCartComponent.vue";
import LangChoose from "./LangChooseComponent.vue";
import ButtonMenu from "./ButtonMenuComponent.vue";

const isMenuOpen = ref(false);
const isOverflow = ref(false);

const toggleMenu = (state: StateMenu) => {
  state === "open" ? (isMenuOpen.value = true) : (isMenuOpen.value = false);
};

const toggleOverflow = (data: boolean) => {
  isOverflow.value = data;
};
</script>

<template>
  <div class="line" />
  <section
    class="header__info container"
    :class="{
      'header__info_h-auto': isMenuOpen,
      'header__info_overflow-disable': isOverflow,
    }"
  >
    <HeaderInfoContacts />
    <HeaderUserAction />
    <HeaderCart />
    <LangChoose @on-open="toggleOverflow" />
    <ButtonMenu @change="toggleMenu" />
  </section>
</template>

<style lang="scss">
.header {
  &__info {
    height: $line-height;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: var(--blue-medium);
    position: relative;
    overflow: hidden;

    &-item {
      flex-grow: 1;
      height: $line-height;
      text-align: center;

      &:hover {
        cursor: pointer;
        background-color: var(--blue-light);
        line-height: $line-height;
      }

      @media (max-width: $breakpoint-tablet) {
        width: 250px;
        text-align: left;
        font-size: 1.4rem;
        padding: 0 1.5rem;
      }
    }

    &_h-auto {
      height: auto;
    }

    &_overflow-disable {
      overflow: visible;
    }

    @media (max-width: $breakpoint-tablet) {
      flex-direction: column;
      align-items: flex-start;
      font-size: 1.4rem;
    }
  }

  &__img-info {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.9rem;
  }
}
</style>
