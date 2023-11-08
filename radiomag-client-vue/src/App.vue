<template>
  <div class="app">
    <Header />
    <Breadcrumbs />
    <ModalWindow />
    <ImageShowBig />
    <div class="container container_min-height">
      <RouterView />
    </div>
    <ShopInfo />
    <Footer />
    <Copyright />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { Header } from "@/components/HeaderMainComponent";
import { Breadcrumbs } from "@/components/BreadcrumbsComponent";
import { ModalWindow } from "@/components";
import { ImageShowBig } from "@/components";
import { ShopInfo } from "@/components/ShopInfoComponent";
import Footer from "@/components/FooterComponent.vue";
import Copyright from "@/components/CopyrightComponent.vue";
import { useCart } from "@/store/cart";

useCart().loadLocalStorage();
</script>
