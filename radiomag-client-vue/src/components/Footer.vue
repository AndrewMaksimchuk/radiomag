<template>
  <section class="container">
      <footer class="footer">
      <section class="footer-catalog">
        <a href="#" class="footer-catalog__item">
          <img
            class="footer-catalog__item-image"
            src="@/assets/images/catalog/electronic_components.png"
            alt=""
          />
          <h2 class="footer-catalog__item-text">Електронні компоненти та комплектующі</h2>
        </a>

        <a href="#" class="footer-catalog__item">
          <img
            class="footer-catalog__item-image"
            src="@/assets/images/catalog/soldering.png"
            alt=""
          />
          <h2 class="footer-catalog__item-text">Інструменти та обладнання</h2>
        </a>

        <a href="#" class="footer-catalog__item">
          <img
            class="footer-catalog__item-image"
            src="@/assets/images/catalog/constructors.jpg"
            alt=""
          />
          <h2 class="footer-catalog__item-text">Конструктори та набори</h2>
        </a>
      </section>

      <section class="footer-description">
        <div class="footer-description__item">
          <h2 class="footer-description__item-header-text">Відділ продажу</h2>
          <address class="shops-info__shop-item footer-description__item_padding-bottom">
            м. Київ, Чоколівський бульвар, 42А, офіс 134-1
          </address>
          <a
            class="shops-info__shop-link footer-description__item_padding-bottom"
            href="tel:+380631815267"
            >+38-044-299-77-44</a
          >
          <a
            class="shops-info__shop-link footer-description__item_padding-bottom"
            href="tel:+0930582943"
            >+38-067-240-79-27</a
          >
          <a
            class="shops-info__shop-link footer-description__item_padding-bottom"
            href="tel:+0930582943"
            >+38-067-240-79-28</a
          >
          <p class="shops-info__shop-item footer-description__item_padding-bottom">
            Години роботи: Пн-Сб 8:30-17:00
          </p>
          <p class="shops-info__shop-item footer-description__item_padding-bottom">
            <a class="shops-info__shop-link" href="emailto:sales@radiomag.com.ua"
              >sales@radiomag.com.ua</a
            >
          </p>
        </div>

        <div class="footer-description__item footer-description__item_row-gap">
          <a class="footer-description__item-link" href="#">Продукція</a>
          <a class="footer-description__item-link" href="#">Новини</a>
          <a class="footer-description__item-link" href="#">Магазини</a>
          <a class="footer-description__item-link" href="#">Контакти</a>
        </div>

        <div class="footer-description__item footer-description__item_row-gap">
          <a class="footer-description__item-link" href="#">Відгуки та пропозиції</a>
          <a class="footer-description__item-link" href="#">Як купувати</a>
          <a class="footer-description__item-link" href="#">Доставка</a>
        </div>

        <div class="footer-description__item footer-description__item_row-gap">
          <a class="footer-description__item-link" href="#">Персональна інформація</a>
          <a class="footer-description__item-link" href="#">Замовлення</a>
          <a class="footer-description__item-link" href="#">Корзина</a>
        </div>

        <div class="footer-description__item-social">
          <div class="footer-description__item-social-links social-links">
            <a class="social-links__link" href="#">
              <img class="social-links__image" src="@/assets/images/vkontakte.svg" alt="" />
            </a>
            <a class="social-links__link" href="#">
              <img class="social-links__image" src="@/assets/images/facebook.svg" alt="" />
            </a>
          </div>

          <div class="footer-description__item-social-payments">
            <img
              class="footer-description__item-social-payments-image"
              src="@/assets/images/money.svg"
              alt=""
            />
            <img
              class="footer-description__item-social-payments-image"
              src="@/assets/images/paypal-logo.svg"
              alt=""
            />
            <img
              class="footer-description__item-social-payments-image"
              src="@/assets/images/symbols.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </footer>
  </section>

</template>

<style lang="scss">
.footer {
  min-width: 100%;

  &-catalog {
    padding: 40px 0 28px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fafafa;

    &__item {
      text-decoration: none;
      flex: 1;
      display: flex;
      align-items: center;
      color: var(--color-black-light);

      &:hover {
        text-decoration: underline;
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
      }

      &-image {
        width: 60px;
        padding-right: 12px;
      }

      &-text {
        font-weight: 700;
      }
    }
  }

  &-description {
    padding: 31px 0 23px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__item {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-right: 75px;

      &-header-text {
        font-size: 1.4rem;
        text-transform: uppercase;
        padding-bottom: 16px;
      }

      &_padding-bottom {
        padding-bottom: 13px;
      }

      &_row-gap {
        row-gap: 24px;
      }

      &-link {
        font-size: 1.4rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
        color: var(--color-black-light);

        &:hover {
          text-decoration: underline;
        }
      }

      &-social {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;

        &-payments {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          column-gap: 4px;
          row-gap: 4px;

          &-image {
            width: 45px;
          }
        }
      }
    }
  }
}

.social-links {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  column-gap: 4px;
  row-gap: 4px;

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
</style>
