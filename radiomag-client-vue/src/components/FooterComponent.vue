<template>
  <section class="container">
    <footer class="footer">
      <section class="footer-catalog">
        <a
          href="#"
          class="footer-catalog__item"
          v-for="item in store.catalog"
          :key="item"
        >
          <img
            class="footer-catalog__item-image"
            :src="'/images/catalog/' + item.img"
            alt=""
          />
          <h2 class="footer-catalog__item-text">{{ item.name }}</h2>
        </a>
      </section>

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
              'tel:' +
              storeContacts.salesDepartment.telephons?.replaceAll('-', '')
            "
            >{{ storeContacts.salesDepartment.telephons }}</a
          >
          <p
            class="shops-info__shop-item footer-description__item_padding-bottom"
          >
            {{ storeContacts.salesDepartment.workTime }}
          </p>
          <p
            class="shops-info__shop-item footer-description__item_padding-bottom"
          >
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

        <div class="footer-description__item-social">
          <div class="footer-description__item-social-links social-links">
            <a class="social-links__link" href="#">
              <img
                class="social-links__image"
                src="@/assets/images/vkontakte.svg"
                alt=""
              />
            </a>
            <a class="social-links__link" href="#">
              <img
                class="social-links__image"
                src="@/assets/images/facebook.svg"
                alt=""
              />
            </a>
          </div>

          <div class="footer-description__item-social-payments">
            <img
              class="footer-description__item-social-payments-image"
              src="@/assets/images/money.svg"
              alt=""
            />
            <img
              class="footer-description__item-social-payments-image"
              src="@/assets/images/paypal-logo.svg"
              alt=""
            />
            <img
              class="footer-description__item-social-payments-image"
              src="@/assets/images/symbols.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useCatalog } from "@/store/catalog";
import { useContacts } from "@/store/contacts";

const store = useCatalog();
const storeContacts = useContacts();

onBeforeMount(() => {
  store.useMenu();
  storeContacts.load();
});
</script>

<style lang="scss">
.footer {
  min-width: 100%;

  &-catalog {
    padding: 40px 0 28px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fafafa;

    &__item {
      text-decoration: none;
      flex: 1;
      display: flex;
      align-items: center;
      color: var(--color-black-light);

      &:hover {
        text-decoration: underline;
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
      }

      &-image {
        width: 60px;
        padding-right: 12px;
      }

      &-text {
        font-weight: 700;
      }
    }
  }

  &-description {
    padding: 31px 0 23px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__item {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-right: 75px;

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

      &-social {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;

        &-payments {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          column-gap: 4px;
          row-gap: 4px;

          &-image {
            width: 45px;
          }
        }
      }
    }
  }
}

.social-links {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  column-gap: 4px;
  row-gap: 4px;

  &__link {
    width: 48px;
    height: 45px;
    background-color: var(--color-blue-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    width: 27px;
  }
}
</style>
