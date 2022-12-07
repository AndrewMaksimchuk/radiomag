<template>
  <header class="header">
    <HeaderInfo />
    <HeaderSearch />
    <HeaderNav />
  </header>
</template>

<script setup lang="ts">
import HeaderInfo from "./HeaderInfo.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderNav from "./HeaderNav.vue";
</script>

<style lang="scss">
.line {
  width: 100%;
  height: $line-height;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--blue-medium);
  z-index: -99;
}

.link {
  text-decoration: none;
  color: #fff;
  line-height: $line-height;
}

.button-style,
%button-style {
  height: $line-height;
  border: none;
  background-color: var(--blue-medium);
  color: #fff;
  font-size: 16px;
}

.button-hover {
  cursor: pointer;
  background-color: var(--blue-light);
}

.login-registration {
  @extend %button-style;

  padding: 0 21px;
}

.subscribe {
  @extend %button-style;

  padding: 0 18px;
}

.card {
  @extend %button-style;

  padding: 0 26px;
  background-color: var(--color-red);

  &__text {
    font-weight: 700;
  }
}

.logo {
  height: 84px;

  &:hover {
    cursor: pointer;
  }
}

.header {
  position: relative;
  margin-bottom: 23px;

  &__info {
    height: $line-height;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: var(--blue-medium);

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

  &__img-info {
    width: 16px;
    height: 16px;
    margin-right: 9px;
  }

  &-search {
    height: 129px;
    padding: 23px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-nav {
    $nav-height: 52px;

    width: 100%;
    height: $nav-height;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    background-color: var(--blue-medium);
    list-style: none;
    letter-spacing: 1px;
    font-weight: 700;

    &__item {
      padding: 0 39px;
      line-height: $nav-height;
    }

    &__item:hover {
      @extend %button-style;
    }
  }
}

.search {
  &__form {
    height: 45px;
    display: flex;

    &-input {
      width: 590px;
      height: 100%;
      border: 1px solid #cfcfcf;
      font-size: 14px;
      padding-left: 17px;
      display: block;
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
