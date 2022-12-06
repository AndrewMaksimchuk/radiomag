<template>
  <div class="lang-choose">
    <button class="lang-choose__select hover" @click="toggle">
      {{ lang }}
    </button>

    <div
      class="lang-choose__options-list"
      :class="{ 'lang-choose__options-list_open': isOpen }"
    >
      <button class="lang-choose__options-item hover" @click="choose('UA')">
        UA
      </button>
      <button class="lang-choose__options-item hover" @click="choose('EN')">
        EN
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const lang = ref("UA");
const isOpen = ref(false);

const toggle = () => (isOpen.value = !isOpen.value);
const close = () => (isOpen.value = false);

const choose = (value: string) => {
  lang.value = value;
  close();
};
</script>

<style lang="scss">
.lang-choose {
  margin: 0;
  padding: 0;
  width: 44px;
  height: 100%;
  text-align: center;
  line-height: $line-height;
  font-size: 18px;
  color: #fff;
  background-color: var(--blue-medium);

  &__select {
    width: 100%;
    height: 100%;
    font-size: inherit;
    border: none;
    background-color: inherit;
    display: block;
    color: inherit;
  }

  &__options-list {
    display: none;
    width: 100%;
    background-color: inherit;
    font-weight: 700;
    position: relative;
    z-index: 999;

    &_open {
      display: block;
    }
  }

  &__options-item {
    width: 100%;
    background-color: transparent;
    color: inherit;
    border: none;
    text-transform: capitalize;
    font-size: inherit;
    display: block;
    padding: 5px 0;
  }
}
</style>
