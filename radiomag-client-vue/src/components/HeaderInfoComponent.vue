<template>
  <div class="line" />
  <section class="header__info container">
    <div class="header__info-item">
      <a class="link" href="tel:+380442200172"
        ><img
          src="@/assets/images/telephone.svg"
          alt="telephone"
          class="header__img-info"
        />+38 (044) 220-01-72</a
      >
    </div>
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
    <button class="header__info-item subscribe">
      <img
        src="@/assets/images/mail-send.svg"
        alt="subscribe"
        class="header__img-info"
      />{{ $t("header.info.subscription") }}
    </button>
    <button class="header__info-item login-registration">
      <img
        src="@/assets/images/user.svg"
        alt="login"
        class="header__img-info"
      />{{ $t("header.info.loginRegistration") }}
    </button>

    <HeaderCart />

    <LangChoose />
  </section>
</template>

<script setup lang="ts">
import HeaderCart from "./HeaderCartComponent.vue";
import LangChoose from "./LangChooseComponent.vue";
</script>
