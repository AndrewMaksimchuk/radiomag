<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>
<script setup lang="ts">
import type { SliderItem } from "$/dto/Slider";

defineProps<{
  data: SliderItem;
}>();
</script>
