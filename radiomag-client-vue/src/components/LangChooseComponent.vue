<script setup lang="ts">
import { ref } from "vue";
import { useI18nStore } from "@/store/i18n";
import { PingService } from "@/services/PingService";

const emit = defineEmits<{
  (e: "on-open", data: boolean): void;
}>();

const useI18n = useI18nStore();
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
  emit("on-open", isOpen.value);
};

const close = () => (isOpen.value = false);

const choose = (value: string) => {
  PingService.ping({
    action: "open window",
    window: "LangChooseComponent",
    payload: value,
  });
  useI18n.setLocale(value);
  close();
};
</script>

<template>
  <div class="lang-choose">
    <button class="lang-choose__select hover" @click="toggle">
      {{ useI18n.locale }}
    </button>

    <div
      class="lang-choose__options-list"
      :class="{ 'lang-choose__options-list_open': isOpen }"
    >
      <button
        class="lang-choose__options-item hover"
        v-for="lang in useI18n.availableLocales"
        :key="lang"
        @click="choose(lang)"
      >
        {{ lang }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.lang-choose {
  margin: 0;
  padding: 0;
  width: 44px;
  height: $line-height;
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
    text-transform: uppercase;
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
    text-transform: uppercase;
    font-size: inherit;
    display: block;
    padding: 5px 0;
  }
}
</style>
