<script lang="ts" setup>
import ContactPhone from "./ContactPhoneComponent.vue";
</script>

<template>
  <ContactPhone />
  <div class="header__info-item">
    <a class="link" href="tel:+380442200173"
      ><img
        src="@/assets/images/fax.svg"
        alt="fax"
        class="header__img-info"
      />+38 (044) 220-01-73</a
    >
  </div>
  <div class="header__info-item">
    <a class="link" href="mailto:sales@rcscomponents.kiev.ua"
      ><img
        src="@/assets/images/email.svg"
        alt="email"
        class="header__img-info"
      />sales@rcscomponents.kiev.ua</a
    >
  </div>
</template>

<style lang="scss">
.header {
  &__info {
    &-item {
      height: 100%;
      padding: 0 32px;
    }

    &-item:hover {
      cursor: pointer;
      background-color: var(--blue-light);
      line-height: $line-height;
    }
  }
}
</style>
