<template>
  <section class="background">

    <ButtonToUp/>

    <div class="container">
      <article class="shops-info" id="shops-info">
        <article class="shops-info__shop">
          <h3 class="shops-info__shop-header-text">
            <span class="shops-info__shop-header-text_uppercase">Радіомаг </span> Київ
          </h3>

          <address class="shops-info__shop-item">
            м. Київ, вул. Ушинського, будинок №1 (біля радіоринку "Караваєві дачі")
          </address>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="tel:+380631815267">+38(063)-181-52-67</a>
            <a class="shops-info__shop-link" href="tel:+0930582943">+38(093)-058-29-43</a>
          </p>

          <p class="shops-info__shop-item">Години роботи: Пн-Сб 9:00-16:00</p>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="emailto:sales@radiomag.com.ua"
              >sales@radiomag.com.ua</a
            >
          </p>
        </article>

        <div class="vertical-line"></div>

        <article class="shops-info__shop">
          <h3 class="shops-info__shop-header-text">
            <span class="shops-info__shop-header-text_uppercase">Радіомаг </span> Львів
          </h3>

          <address class="shops-info__shop-item">
            м. Київ, вул. Ушинського, будинок №1 (біля радіоринку "Караваєві дачі")
          </address>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="tel:+380631815267">+38(063)-181-52-67</a>
            <a class="shops-info__shop-link" href="tel:+0930582943">+38(093)-058-29-43</a>
          </p>

          <p class="shops-info__shop-item">Години роботи: Пн-Сб 9:00-16:00</p>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="emailto:sales@radiomag.com.ua"
              >sales@radiomag.com.ua</a
            >
          </p>
        </article>

        <div class="vertical-line"></div>

        <article class="shops-info__shop">
          <h3 class="shops-info__shop-header-text">
            <span class="shops-info__shop-header-text_uppercase">Радіомаг </span> Харків
          </h3>

          <address class="shops-info__shop-item">
            м. Київ, вул. Ушинського, будинок №1 (біля радіоринку "Караваєві дачі")
          </address>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="tel:+380631815267">+38(063)-181-52-67</a>
            <a class="shops-info__shop-link" href="tel:+0930582943">+38(093)-058-29-43</a>
          </p>

          <p class="shops-info__shop-item">Години роботи: Пн-Сб 9:00-16:00</p>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="emailto:sales@radiomag.com.ua"
              >sales@radiomag.com.ua</a
            >
          </p>
        </article>

        <div class="vertical-line"></div>

        <article class="shops-info__shop">
          <h3 class="shops-info__shop-header-text">
            <span class="shops-info__shop-header-text_uppercase">Радіомаг </span> Дніпро
          </h3>

          <address class="shops-info__shop-item">
            м. Київ, вул. Ушинського, будинок №1 (біля радіоринку "Караваєві дачі")
          </address>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="tel:+380631815267">+38(063)-181-52-67</a>
            <a class="shops-info__shop-link" href="tel:+0930582943">+38(093)-058-29-43</a>
          </p>

          <p class="shops-info__shop-item">Години роботи: Пн-Сб 9:00-16:00</p>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="emailto:sales@radiomag.com.ua"
              >sales@radiomag.com.ua</a
            >
          </p>
        </article>

        <div class="vertical-line"></div>

        <article class="shops-info__shop">
          <h3 class="shops-info__shop-header-text">
            <span class="shops-info__shop-header-text_uppercase">Радіомаг </span> Одеса
          </h3>

          <address class="shops-info__shop-item">
            м. Київ, вул. Ушинського, будинок №1 (біля радіоринку "Караваєві дачі")
          </address>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="tel:+380631815267">+38(063)-181-52-67</a>
            <a class="shops-info__shop-link" href="tel:+0930582943">+38(093)-058-29-43</a>
          </p>

          <p class="shops-info__shop-item">Години роботи: Пн-Сб 9:00-16:00</p>

          <p class="shops-info__shop-item">
            <a class="shops-info__shop-link" href="emailto:sales@radiomag.com.ua"
              >sales@radiomag.com.ua</a
            >
          </p>
        </article>
      </article>
    </div>
  </section>
</template>

<script setup>
import ButtonToUp from './ButtonToUp.vue';
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
