<script lang="ts" setup>
import ContactPhone from "./ContactPhoneComponent.vue";

const emits = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <ContactPhone @click="emits('click')" />
  <div class="header__info-item">
    <a class="link" href="tel:+380442200173" @click="emits('click')">
      <img src="@/assets/images/fax.svg" alt="fax" class="header__img-info" />
      <span class="contacts"> +38 (044) 220-01-73 </span>
    </a>
  </div>
  <div class="header__info-item">
    <a
      class="link"
      href="mailto:sales@rcscomponents.kiev.ua"
      @click="emits('click')"
    >
      <img
        src="@/assets/images/email.svg"
        alt="email"
        class="header__img-info"
      />
      <span class="contacts"> sales@rcscomponents.kiev.ua </span>
    </a>
  </div>
</template>

<style lang="scss">
.contacts {
  @media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-pre-tablet) {
    display: none;
  }
}
</style>
