<template>
  <div class="contact-list">

    <ContactShop
      v-for="(item, index) in datas"
      :key="index"
      :shopInfo="item" />
  </div>
</template>

<script>
import ContactShop from './ContactShop.vue';

export default {
  name: 'ContactShopList',
  props: {
    datas: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactShop,
  },
};
</script>

<style lang="scss">
.contact-list {
  flex: 1;
}
</style>
