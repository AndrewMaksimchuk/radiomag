<template>
  <div class="app">
    <Header/>
    <Breadcrumbs/>
    <ModalWindow/>
    <ImageShowBig/>
    <RouterView class="container"/>
    <ShopInfo/>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ModalWindow from '@/components/ModalWindow.vue';
import ImageShowBig from '@/components/ImageShowBig.vue';
import ShopInfo from '@/components/ShopInfo.vue';
import Footer from '@/components/Footer.vue';
import Copyright from '@/components/Copyright.vue';
import { useCart } from '@/store/cart';

useCart().loadLocalStorage();
</script>
