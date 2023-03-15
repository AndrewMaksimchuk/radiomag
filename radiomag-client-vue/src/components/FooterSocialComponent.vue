<template>
  <div class="social">
    <div class="social-links social-links">
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

    <div class="social-payments">
      <img
        class="social-payments-image"
        src="@/assets/images/money.svg"
        alt=""
      />
      <img
        class="social-payments-image"
        src="@/assets/images/paypal-logo.svg"
        alt=""
      />
      <img
        class="social-payments-image"
        src="@/assets/images/symbols.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: $breakpoint-mobile) {
    padding: 20px 0;
    border-top: 1px solid var(--color-gray-light);
  }

  &-payments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 4px;
    row-gap: 4px;

    @media (max-width: $breakpoint-mobile) {
      justify-content: space-around;
    }

    &-image {
      width: 45px;
    }
  }

  &-links {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    column-gap: 4px;
    row-gap: 4px;

    @media (max-width: $breakpoint-mobile) {
      justify-content: center;
    }

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
}
</style>
