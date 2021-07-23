<template>
  <div
    :class="{ 'slider__controls-button_active': isActive }"
    class="slider__controls-button"
    @click="makeActive">
  </div>
</template>

<script>
export default {
  name: 'SliderButton',
  props: {
    activeButton: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.activeButton === this.index;
    },
  },
  methods: {
    makeActive() {
      this.$emit('makeActive', this.index);
    },
  },
};
</script>
