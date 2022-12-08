<template>
  <article class="contacts">
    <ContactSection
      v-for="(item, index) in contacts"
      :key="index"
      :headerText="item.headerText"
    >
      <Map />
      <ContactShopList :datas="item.list" />
    </ContactSection>
  </article>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { GET } from "@/httpClient";
import ContactSection from "@/components/ContactSection.vue";
import Map from "@/components/Map.vue";
import ContactShopList from "@/components/ContactShopList.vue";

const contacts = ref();

onBeforeMount(async () => {
  const [error, data] = await GET.contacts();
  if (error) console.debug(error);
  contacts.value = data;
});
</script>

<style lang="scss">
.contacts {
  padding: 23px 0;
}
</style>
