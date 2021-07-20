<template>
  <article class="contacts">

    <ContactSection v-for="(item, index) in allContacts" :key="index" :headerText="item.headerText">
      <Map/>
      <ContactShopList :datas="item.list"/>
    </ContactSection>

  </article>
</template>

<script>
import { allContacts } from '@/services/index';
import ContactSection from '@/components/ContactSection.vue';
import Map from '@/components/Map.vue';
import ContactShopList from '@/components/ContactShopList.vue';

export default {
  name: 'Contacts',
  components: {
    ContactSection,
    Map,
    ContactShopList,
  },
  data() {
    return {
      allContacts,
    };
  },
};
</script>

<style lang="scss">
.contacts {
  padding: 23px 0;
}
</style>
