<template>
  <nav class="container">
    <ul class="header-nav">
      <HeaderNavItem
        v-for="(item, index) in nav"
        :key="index"
        :link="item.link"
        :text="item.text"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useI18nStore } from "@/store/i18n";
import HeaderNavItem from "./HeaderNavItem.vue";

const useI18n = useI18nStore();
const nav = ref();

watchEffect(() => {
  nav.value = [
    { link: "/products", text: useI18n.t("header.nav.product") },
    { link: "/", text: useI18n.t("header.nav.news") },
    { link: "/#shops-info", text: useI18n.t("header.nav.shops") },
    { link: "/contacts", text: useI18n.t("header.nav.contacts") },
    { link: "/", text: useI18n.t("header.nav.feedbackSuggestions") },
    { link: "/", text: useI18n.t("header.nav.howBuy") },
    { link: "/", text: useI18n.t("header.nav.delivery") },
  ];
});
</script>
