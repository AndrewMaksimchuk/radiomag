<template>
  <article class="contacts">
    <ContactSection
      v-for="(item, index) in store.contacts"
      :key="index"
      :headerText="item.headerText"
    >
      <Map />
      <ContactShopList :datas="item.list" />
    </ContactSection>
  </article>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useContacts } from "@/store/contacts";
import ContactSection from "@/components/ContactSection.vue";
import Map from "@/components/Map.vue";
import ContactShopList from "@/components/ContactShopList.vue";

const store = useContacts();
onBeforeMount(() => store.load());
</script>

<style lang="scss">
.contacts {
  padding: 23px 0;
}
</style>
