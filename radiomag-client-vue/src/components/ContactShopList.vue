<template>
  <div class="contact-list">
    <ContactShop v-for="(item, index) in datas" :key="index" :shopInfo="item" />
  </div>
</template>

<script setup lang="ts">
import type { ContactItemList } from "../../../dto/Contacts";
import ContactShop from "./ContactShop.vue";

defineProps<{
  datas: ContactItemList[];
}>();
</script>

<style lang="scss">
.contact-list {
  flex: 1;
}
</style>
