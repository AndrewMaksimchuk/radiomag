<script setup lang="ts">
defineProps<{
  header: string;
  id: number;
  data: { title: string; qty: number }[];
}>();
</script>

<template>
  <div class="filter">
    <h2 class="filter__header-text">{{ header }}</h2>
    <ul class="filter__container">
      <li class="filter__item" v-for="(item, index) in data" :key="index">
        <input
          class="filter__item-input"
          type="checkbox"
          :name="item.title"
          :id="`${header}_${index}`"
        />
        <label class="filter__item-label" :for="`${header}_${index}`"
          >{{ item.title }} ({{ item.qty }})</label
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.filter {
  height: 234px;
  padding: 14px 10px;
  color: var(--color-black-light);
  border: 1px solid var(--color-gray-light);

  &__header-text {
    font-size: 1.4rem;
    font-weight: 700;
    padding-bottom: 14px;
    height: 15%;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__container {
    list-style: none;
    padding: 0;
    padding-left: 4px;
    padding-top: 4px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 85%;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-gray-light);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--blue-medium);
      border-radius: 5px;
    }
  }

  &__item {
    display: flex;
    font-size: 1.2rem;
    padding-bottom: 11px;

    &-input {
      margin-right: 6px;
    }

    &-label {
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
