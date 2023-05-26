<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useI18nStore } from "@/store/i18n";
import HeaderNavItem from "./HeaderNavItem.vue";
import { PingService } from "@/services/PingService";

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

<template>
  <nav class="container">
    <ul class="header-nav">
      <HeaderNavItem
        v-for="(item, index) in nav"
        :key="index"
        :link="item.link"
        :text="item.text"
        @click="PingService.ping({ action: 'go to page', to: item.link })"
      />
    </ul>
  </nav>
</template>

<style lang="scss">
.header {
  &-nav {
    width: 100%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    background-color: var(--blue-medium);
    list-style: none;
    letter-spacing: 1px;
    font-weight: 700;

    @media (max-width: $breakpoint-mobile) {
      justify-content: center;
      display: none;
    }
  }
}
</style>
