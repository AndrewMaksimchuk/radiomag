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
      @media (max-width: $breakpoint-tablet) {
        font-size: 14px;
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
      font-size: 14px;
    }
  }

  &__img-info {
    width: 16px;
    height: 16px;
    margin-right: 9px;
  }
}
</style>
