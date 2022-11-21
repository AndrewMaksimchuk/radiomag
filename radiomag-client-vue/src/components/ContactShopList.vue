<template>
  <div class="contact-list">
    <ContactShop
      v-for="(item, index) in datas"
      :key="index"
      :shopInfo="item" />
  </div>
</template>

<script setup>
import ContactShop from './ContactShop.vue';

defineProps({
  datas: {
      type: Array,
      required: true,
    },
});
</script>

<style lang="scss">
.contact-list {
  flex: 1;
}
</style>
