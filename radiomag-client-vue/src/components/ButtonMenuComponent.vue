<script setup lang="ts">
import { ref } from "vue";

export type StateMenu = "open" | "close";

const emit = defineEmits<{
  (e: "change", data: StateMenu): void;
}>();

const state = ref<StateMenu>("close");

const toggle = () => {
  state.value === "open" ? (state.value = "close") : (state.value = "open");
  emit("change", state.value);
};
</script>

<template>
  <button type="button" class="button" :data-state="state" @click="toggle">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <div class="button__line"></div>
  </button>
</template>

<style lang="scss" scoped>
.button {
  min-width: $line-height;
  min-height: $line-height;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: none;
  flex-direction: column;
  row-gap: 3px;
  position: absolute;
  top: calc($line-height / 2);
  right: 0;
  transform: translateY(-50%);

  @media (max-width: $breakpoint-tablet) {
    display: flex;
  }

  &[data-state="open"] {
    :nth-child(1) {
      transform: translate(0, 6px) rotate(-45deg);
    }

    :nth-child(2) {
      opacity: 0;
    }

    :nth-child(3) {
      transform: translate(0, -6px) rotate(45deg);
    }
  }

  &__line {
    width: 20px;
    height: 3px;
    background-color: var(--color-white);
    transition: 0.4s;
  }
}
</style>
