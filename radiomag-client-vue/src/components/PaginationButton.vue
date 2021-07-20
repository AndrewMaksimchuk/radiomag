<template>
  <button
      :class="{ 'active-button': isActive }"
      >{{ buttonNumber }}</button>
</template>

<script>
export default {
  name: 'PaginationButton',
  props: {
    buttonNumber: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.page === this.buttonNumber;
    },
  },
};
</script>

<style lang="scss">
.active-button {
  background-color: var(--blue-medium);
  color: var(--color-white);
}
</style>
