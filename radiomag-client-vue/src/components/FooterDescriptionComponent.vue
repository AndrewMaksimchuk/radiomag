<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useContacts } from "@/store/contacts";
import FooterSocial from "./FooterSocialComponent.vue";

const storeContacts = useContacts();
onBeforeMount(() => storeContacts.load());
</script>

<template>
  <section class="footer-description">
    <div class="footer-description__item">
      <h2 class="footer-description__item-header-text">
        {{ storeContacts.salesDepartment.headerText }}
      </h2>
      <address
        class="shops-info__shop-item footer-description__item_padding-bottom"
      >
        {{ storeContacts.salesDepartment.location }}
      </address>
      <a
        class="shops-info__shop-link footer-description__item_padding-bottom"
        :href="
          'tel:' + storeContacts.salesDepartment.telephons?.replaceAll('-', '')
        "
        >{{ storeContacts.salesDepartment.telephons }}</a
      >
      <p class="shops-info__shop-item footer-description__item_padding-bottom">
        {{ storeContacts.salesDepartment.workTime }}
      </p>
      <p class="shops-info__shop-item footer-description__item_padding-bottom">
        <a
          class="shops-info__shop-link"
          :href="'emailto:' + storeContacts.salesDepartment.email"
          >{{ storeContacts.salesDepartment.email }}</a
        >
      </p>
    </div>

    <div class="footer-description__item footer-description__item_row-gap">
      <a class="footer-description__item-link" href="#">{{
        $t("footer.product")
      }}</a>
      <a class="footer-description__item-link" href="#">{{
        $t("footer.news")
      }}</a>
      <a class="footer-description__item-link" href="#">{{
        $t("footer.shops")
      }}</a>
      <a class="footer-description__item-link" href="#">{{
        $t("footer.contacts")
      }}</a>
    </div>

    <div class="footer-description__item footer-description__item_row-gap">
      <a class="footer-description__item-link" href="#">{{
        $t("footer.feedbackSuggestions")
      }}</a>
      <a class="footer-description__item-link" href="#">{{
        $t("footer.howBuy")
      }}</a>
      <a class="footer-description__item-link" href="#">{{
        $t("footer.delivery")
      }}</a>
    </div>

    <div class="footer-description__item footer-description__item_row-gap">
      <a class="footer-description__item-link" href="#">{{
        $t("footer.personalInformation")
      }}</a>
      <a class="footer-description__item-link" href="#">{{
        $t("footer.order")
      }}</a>
      <a class="footer-description__item-link" href="#">{{
        $t("footer.basket")
      }}</a>
    </div>
    <FooterSocial />
  </section>
</template>

<style lang="scss" scoped>
.footer {
  &-description {
    padding: 31px 0 23px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: $breakpoint-mobile) {
      flex-direction: column;
      gap: 20px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-right: 75px;

      &:first-child {
        @media (max-width: $breakpoint-mobile) {
          border-bottom: 1px solid var(--color-gray-light);
        }
      }

      @media (max-width: $breakpoint-mobile) {
        padding: 0;
        text-align: center;
      }

      &-header-text {
        font-size: 1.4rem;
        text-transform: uppercase;
        padding-bottom: 16px;
      }

      &_padding-bottom {
        padding-bottom: 13px;
      }

      &_row-gap {
        row-gap: 24px;
      }

      &-link {
        font-size: 1.4rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
        color: var(--color-black-light);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
