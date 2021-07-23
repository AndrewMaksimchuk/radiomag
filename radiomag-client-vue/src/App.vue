<template>
  <Header/>
  <ModalWindow
    v-if="isModalVisible"/>
  <ImageShowBig
    v-if="isBigImageShowed"/>
  <router-view
    class="container"/>
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
import ImageShowBig from '@/components/ImageShowBig.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    ShopInfo,
    Footer,
    Copyright,
    ModalWindow,
    ImageShowBig,
  },
  computed: {
    ...mapGetters(['isModalVisible', 'isBigImageShowed', 'getCart']),
  },
  beforeCreate() {
    const localStore = localStorage.getItem('cart');
    if (localStore) {
      const data = JSON.parse(localStore);
      if (data.length > 0) {
        this.$store.commit('putCartDataFromLocalStorage', data);
      }
    }
  },
};
</script>

<style lang="scss">

</style>
