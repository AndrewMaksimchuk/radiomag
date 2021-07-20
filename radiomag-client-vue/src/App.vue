<template>
  <Header/>
  <ModalWindow v-if="showModalWindow"/>
  <router-view class="container"/>
  <ShopInfo/>
  <Footer/>
  <Copyright/>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Copyright from '@/components/Copyright.vue';
import ShopInfo from '@/components/ShopInfo.vue';
import ModalWindow from '@/components/ModalWindow.vue';

export default {
  name: 'App',
  components: {
    Header,
    ShopInfo,
    Footer,
    Copyright,
    ModalWindow,
  },
  computed: {
    showModalWindow() {
      return this.$store.getters.isModalVisible;
    },
  },
};
</script>

<style lang="scss">

</style>
