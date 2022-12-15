<template>
  <section class="background">
    <ButtonToUp />

    <div class="container">
      <article class="shops-info" id="shops-info">
        <article
          class="shops-info__shop"
          v-for="shop in store.shops"
          :key="shop.name"
        >
          <h3 class="shops-info__shop-header-text">
            <span class="shops-info__shop-header-text_uppercase"></span>
            {{ shop.name }}
          </h3>

          <address class="shops-info__shop-item">
            {{ shop.location }}
          </address>

          <p class="shops-info__shop-item">
            <a
              class="shops-info__shop-link"
              :href="'tel:' + shop.telephons.replaceAll('-', '')"
              >{{ shop.telephons }}</a
            >
          </p>

          <p class="shops-info__shop-item">{{ shop.workTime }}</p>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" :href="'emailto:' + shop.email">{{
              shop.email
            }}</a>
          </p>
        </article>

        <div class="vertical-line"></div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useContacts } from "@/store/contacts";
import ButtonToUp from "./ButtonToUpComponent.vue";

const store = useContacts();
onBeforeMount(() => store.load());
</script>

<style lang="scss">
.background {
  width: 100%;
  background-color: var(--color-white);
  margin-top: 43px;
  position: relative;
}

.shops-info {
  min-width: 100%;
  padding: 28px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__shop {
    width: 268px;
    padding: 13px;

    &-header-text {
      font-size: 1.8rem;
      font-weight: 700;
      padding-bottom: 26px;
      letter-spacing: 1px;

      &_uppercase {
        text-transform: uppercase;
      }
    }

    &-item {
      margin: 0;
      padding-bottom: 20px;
      letter-spacing: 1px;
      color: var(--color-black-light);
      font-style: normal;
    }

    &-link {
      text-decoration: none;
      color: var(--color-black-light);

      &:hover {
        text-decoration: underline;
      }
    }

    &::after {
      content: "";
    }
  }
}

.vertical-line {
  width: 1px;
  min-height: 100%;
  background-color: var(--color-gray-light);

  &:last-child {
    display: none;
  }
}
</style>
