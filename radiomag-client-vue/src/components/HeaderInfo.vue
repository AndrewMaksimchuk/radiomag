<template>
    <div class="line"/>
    <section class="header__info container">
        <div class="header__info-item">
            <a class="link" href="tel:+380442200172"><img src="@/assets/images/telephone.svg" alt="telephone"
                    class="header__img-info" />+38
                (044) 220-01-72</a>
        </div>
        <div class="header__info-item">
            <a class="link" href="tel:+380442200173"><img src="@/assets/images/fax.svg" alt="fax"
                    class="header__img-info" />+38 (044)
                220-01-73</a>
        </div>
        <div class="header__info-item">
            <a class="link" href="mailto:sales@rcscomponents.kiev.ua"><img src="@/assets/images/email.svg" alt="email"
                    class="header__img-info" />sales@rcscomponents.kiev.ua</a>
        </div>
        <button class="header__info-item subscribe">
            <img src="@/assets/images/mail-send.svg" alt="subscribe" class="header__img-info" />Підписка
        </button>
        <button class="header__info-item login-registration">
            <img src="@/assets/images/user.svg" alt="login" class="header__img-info" />Вхід / Реєстрація
        </button>

        <HeaderCart />

        <form class="header__info-item change-lang">
            <select name="choose-lang" id="choose-lang" class="change-lang__select">
                <option value="ua" class="change-lang__oprion">Ua</option>
                <option value="ru" class="change-lang__oprion">Ru</option>
                <option value="en" class="change-lang__oprion">En</option>
            </select>
        </form>
    </section>
</template>

<script setup lang="ts">
import HeaderCart from './HeaderCart.vue';
</script>
