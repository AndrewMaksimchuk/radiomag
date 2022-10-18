<template>
  <header class="header">
    <div class="line"></div>

    <section class="header__info container">
      <div class="header__info-item">
        <a class="link" href="tel:+380442200172"
          ><img src="@/assets/images/telephone.svg" alt="telephone" class="header__img-info" />+38
          (044) 220-01-72</a
        >
      </div>
      <div class="header__info-item">
        <a class="link" href="tel:+380442200173"
          ><img src="@/assets/images/fax.svg" alt="fax" class="header__img-info" />+38 (044)
          220-01-73</a
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
        <img src="@/assets/images/mail-send.svg" alt="subscribe" class="header__img-info" />Підписка
      </button>
      <button class="header__info-item login-registration">
        <img src="@/assets/images/user.svg" alt="login" class="header__img-info" />Вхід / Реєстрація
      </button>

      <!-- <button class="header__info-item card">
        <img
          src="@/assets/images/shopping-cart.svg"
          alt="shopping cart"
          class="header__img-info"
        />Ваша корзина:
        <span class="card__text">пуста</span>
      </button> -->

      <HeaderCart/>

      <form class="header__info-item change-lang">
        <select name="choose-lang" id="choose-lang" class="change-lang__select">
          <option value="ua" class="change-lang__oprion">Ua</option>
          <option value="ru" class="change-lang__oprion">Ru</option>
          <option value="en" class="change-lang__oprion">En</option>
        </select>
      </form>
    </section>

    <section class="header-search container">

      <router-link to="/">
        <img src="@/assets/images/logo_ukrainian.gif" alt="logo rcscomponents" class="logo" />
      </router-link>

      <form action="/" class="search__form">
        <input
          type="text"
          :placeholder="searchPlaceholder"
          class="search__form-input"
          v-model="productName"/>
        <button
          type="submit"
          class="search__form-submit"
          @click.prevent="searchProduct">
          <img
            src="@/assets/images/magnifying-glass.svg"
            alt="search button"
            class="search__form-button"
          />
        </button>
      </form>

      <router-link to="/">
        <img src="@/assets/images/radiomag_ukrainian.gif" alt="logo radiomag" class="logo" />
      </router-link>

    </section>

    <nav class="container">
      <ul class="header-nav">
        <li class="header-nav__item">
          <router-link to="/products" class="link">Продукція</router-link>
        </li>
        <li class="header-nav__item"><a href="/" class="link">новини</a></li>
        <li class="header-nav__item"><a href="/#shops-info" class="link">магазини</a></li>
        <li class="header-nav__item">
          <router-link to="/contacts" class="link">контакти</router-link>
        </li>
        <li class="header-nav__item"><a href="/" class="link">відгуки та пропозиції</a></li>
        <li class="header-nav__item"><a href="/" class="link">як купити</a>?</li>
        <li class="header-nav__item"><a href="/" class="link">доставка</a></li>
      </ul>
    </nav>

  </header>
</template>

<script>
import HeaderCart from './HeaderCart.vue';

export default {
  name: 'Header',
  components: {
    HeaderCart,
  },
  data() {
    return {
      productName: '',
      searchPlaceholder: 'Введіть текст',
    };
  },
  methods: {
    searchProduct() {
      if (this.productName) {
        this.$router.push({ name: 'search', params: { name: this.productName } });
        return;
      }
      this.searchPlaceholder = 'Поле пусте, потрібно ввести текст';
    },
  },
};
</script>

<style lang="scss">

$line-height: 40px;

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
}

.button-style {
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
    @extend .button-style;
    padding: 0 21px;
}

.subscribe {
    @extend .button-style;
    padding: 0 18px;
}

.card {
    @extend .button-style;
    padding: 0 26px;
    background-color: var(--color-red);
    &__text {
        font-weight: 700;
    }
}

.logo {
    height: 84px;
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
            @extend .button-hover
        }
    }
}

.search__form {
    // width: 803px;
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
    &-submit:hover{
        cursor: pointer;
        & .search__form-button {
            width: 30px;
            height: 30px;
        }
    }
    &-button {
        width: 21px;
        height: 21px;
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

.change-lang {
    padding: 0;
    &__select {
        border: none;
        background-color: var(--blue-medium);
        color: #fff;
        font-weight: 700;
    }
    &__option {
        text-transform: capitalize;
    }
}

</style>
