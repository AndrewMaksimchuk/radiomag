<template>
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
</template>

<style lang="scss">
.subscribe {
  @extend %button-style;

  padding: 0 32px;
}

.login-registration {
  @extend %button-style;

  padding: 0 32px;
}
</style>
