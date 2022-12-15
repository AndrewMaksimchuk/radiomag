<template>
  <form action="/" class="search__form">
    <input
      type="text"
      :placeholder="searchPlaceholder"
      class="search__form-input"
      v-model="productName"
    />
    <button
      type="submit"
      class="search__form-submit"
      @click.prevent="searchProduct"
    >
      <img
        src="@/assets/images/magnifying-glass.svg"
        alt="search button"
        class="search__form-button hover"
      />
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18nStore } from "@/store/i18n";

const router = useRouter();
const useI18n = useI18nStore();
const productName = ref("");
const searchPlaceholder = ref("");

searchPlaceholder.value = useI18n.t("header.search.empty");

const searchProduct = () =>
  productName.value
    ? router.push({ name: "search", params: { name: productName.value } })
    : (searchPlaceholder.value = useI18n.t("header.search.emptyWhenClick"));

watch(
  useI18n,
  () => (searchPlaceholder.value = useI18n.t("header.search.empty"))
);
</script>
