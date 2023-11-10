<template>
  <button type="button" class="button" :data-state="state" @click="toggle">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <div class="button__line"></div>
  </button>
</template>
<style lang="scss" scoped src="./style.scss"></style>
<script setup lang="ts">
import { ref, watch } from "vue";

export type StateMenu = "open" | "close";

const props = defineProps<{
  menuState: boolean;
}>();

const emit = defineEmits<{
  (e: "change", data: StateMenu): void;
}>();

const state = ref<StateMenu>("close");

const toggle = () => {
  "open" === state.value ? (state.value = "close") : (state.value = "open");
  emit("change", state.value);
};

watch(props, (value) => {
  value.menuState ? (state.value = "open") : (state.value = "close");
});
</script>
