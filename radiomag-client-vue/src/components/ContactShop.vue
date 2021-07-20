<template>
  <article class="contacts-shop">

    <h2
      class="contacts-shop__header-text"
      v-if="shopInfo.name">
      {{ shopInfo.name }}</h2>

      <ul class="contacts-shop__list">
        <li
          class="contacts-shop__list-item"
          v-if="shopInfo.location">
          <img
            src="@/assets/images/pin.svg"
            alt="icon"
            class="contacts-shop__list-item-icon" >
          {{ shopInfo.location }}</li>

        <li
          class="contacts-shop__list-item"
          v-if="shopInfo.telephons">
          <a
            class="contacts-shop__list-item-link"
            :href="'tel:' + formatPhoneNumber">
              <img
              src="@/assets/images/phone-call.svg"
              alt="icon"
              class="contacts-shop__list-item-icon" >
              {{ shopInfo.telephons }}
          </a>
        </li>

        <li
          class="contacts-shop__list-item"
          v-if="shopInfo.workTime">
          <img
            src="@/assets/images/clock.svg"
            alt="icon"
            class="contacts-shop__list-item-icon" >
          {{ shopInfo.workTime }}</li>

        <li
          class="contacts-shop__list-item"
          v-if="shopInfo.email">
          <a
            class="contacts-shop__list-item-link"
            :href="'mailto:' + shopInfo.email">
              <img
              src="@/assets/images/email(2).svg"
              alt="icon"
              class="contacts-shop__list-item-icon" >
              {{ shopInfo.email }}
          </a>
        </li>
      </ul>

  </article>
</template>

<script>
export default {
  name: 'ContactShop',
  props: {
    shopInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatPhoneNumber() {
      return this.shopInfo.telephons.replaceAll('-', '');
    },
  },
};
</script>

<style lang="scss">
.contacts-shop {
  width: 100%;

  &__header-text {
    color: var(--color-white);
    font-size: 1.6rem;
    padding: 8px 16px;
    background-color: var(--blue-medium);
  }

  &__list {
    padding: 10px 0;
    list-style: none;
    color: var(--color-black-light);

    &-item {
      font-size: 1.8rem;
      padding: 6px 0;
      display: flex;
      align-items: center;

      &-icon {
        width: 15px;
        height: 15px;
        margin-right: 11px;
      }

      &-link {
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: underline;
        }
      };
    }
  }

}
</style>
