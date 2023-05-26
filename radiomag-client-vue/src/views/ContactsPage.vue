<template>
  <article class="contacts">
    <ContactSection
      v-for="(item, index) in store.contacts"
      :key="index"
      :headerText="item.headerText"
    >
      <Map
        :id="index.toString()"
        :view="item.map.view"
        :zoom="item.map.zoom"
        :markers="item.map.markers"
      />
      <ContactShopList :datas="item.list" />
    </ContactSection>
  </article>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useContacts } from "@/store/contacts";
import ContactSection from "@/components/ContactSectionComponent.vue";
import Map from "@/components/MapComponent.vue";
import ContactShopList from "@/components/ContactShopList.vue";

const store = useContacts();
onBeforeMount(() => store.load());
</script>

<style lang="scss">
.contacts {
  padding: 23px 0;

  @media (max-width: $breakpoint-tablet) {
    padding: 0 15px;
  }
}
</style>
