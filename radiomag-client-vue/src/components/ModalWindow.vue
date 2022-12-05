<template>
  <section class="modal-window" v-if="store.isVisible" @click.self="store.hide">
    <header class="modal-window__header">
      <h2 class="modal-window__header-text">{{ store.headerText }}</h2>
      <button class="close-button" @click="store.hide">
        <div class="close-button__line"></div>
        <div class="close-button__line close-button__line_rotate-180"></div>
      </button>
    </header>
    <div class="modal-window__slot">
      <ModalWindowItem
        v-for="(item, index) in store.data"
        :key="item.id"
        :data="item"
        :index="index"
      />
    </div>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import ModalWindowItem from "./ModalWindowItem.vue";
import { useModalWindow } from "@/store/modalWindow";

const store = useModalWindow();
</script>

<style lang="scss">
.close-button {
  min-width: 24px;
  min-height: 24px;
  border: none;
  background: none;
  margin: 0;
  margin-left: 15px;
  padding: 0;
  position: relative;
  opacity: 0.3;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &__line {
    position: absolute;
    width: 100%;
    height: 6px;
    top: 9px;
    left: 0;
    background-color: #fff;
    transform: rotate(45deg);

    &_rotate-180 {
      transform: rotate(-45deg);
    }
  }
}

.modal-window {
  --modal-padding: 40px;
  --header-size: 100px;

  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
  border: 1px solid #d8d8d8;
  padding: var(--modal-padding);
  background-color: var(--color-black-light-alpha);

  &__header {
    height: var(--header-size);
    padding: 18px;
    font-size: 1.8rem;
    color: #fff;
    background-color: #2d7dbc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-text {
      margin: 0;
      color: inherit;
    }
  }

  &__slot {
    max-height: calc(100% - var(--header-size));
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 20px;
    background-color: #fff;
    overflow-y: auto;
  }
}
</style>
