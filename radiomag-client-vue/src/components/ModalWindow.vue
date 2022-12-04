<template>
  <section class="modal-window container" v-if="store.isVisible">
    <header class="modal-window__header">
      <h2 class="modal-window__header-text">{{ store.headerText }}</h2>
      <button class="close-button" @click="store.hide" ref="close">
        <div class="close-button__line"></div>
        <div class="close-button__line close-button__line_rotate-180"></div>
      </button>
    </header>
    <div class="modal-window__slot">
      <ModalWindowItem v-for="item in store.data" :key="item.id" :data="item" />
    </div>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { ref, onUpdated } from "vue";
import ModalWindowItem from "./ModalWindowItem.vue";
import { useModalWindow } from "@/store/modalWindow";

const store = useModalWindow();
const close = ref<HTMLElement | null>(null);

onUpdated(() => {
  console.log(close.value);
  if (close.value) {
    close.value.focus();
  }
});
</script>

<style lang="scss">
.close-button {
  width: 24px;
  height: 24px;
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
  min-width: 100px;
  border: 1px solid #d8d8d8;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;

  &__header {
    width: 100%;
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
  }
}
</style>
