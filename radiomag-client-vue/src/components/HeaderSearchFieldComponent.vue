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

<style lang="scss">
.search {
  &__form {
    height: 45px;
    display: flex;

    @media (max-width: $breakpoint-mobile) {
      width: 100%;
    }

    &-input {
      width: 590px;
      height: 100%;
      border: 1px solid #cfcfcf;
      font-size: 14px;
      padding-left: 17px;
      display: block;

      @media (max-width: $breakpoint-mobile) {
        width: auto;
      }
    }

    &-submit {
      width: 71px;
      height: 100%;
      background-color: var(--color-red);
      border: none;
    }

    &-button {
      width: 21px;
      height: 21px;

      &:hover {
        transform: scale(1.4);
      }
    }

    &-submit:hover {
      cursor: pointer;
    }

    &-in-stock {
      width: 143px;
      height: 100%;
      background-color: var(--blue-medium);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      letter-spacing: 1px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      &-checkbox {
        margin: 9px;
      }
    }
  }
}
</style>
