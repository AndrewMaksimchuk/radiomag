<template>
  <div class="filter">

    <h2 class="filter__header-text"> {{ filterHeader }} </h2>

    <ul class="filter__container">

      <li class="filter__item" v-for="(item, index) in filterData" :key="index">
        <input
          class="filter__item-input"
          type="checkbox"
          :name="item.title"
          :id="filterId + index">
        <label
          class="filter__item-label"
          :for="filterId + index">{{ item.title }} ({{ item.qty}})</label>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    filterId: {
      required: true,
      type: String,
    },
    filterHeader: {
      required: true,
      type: String,
    },
    filterData: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.filter {
  width: 288px;
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
