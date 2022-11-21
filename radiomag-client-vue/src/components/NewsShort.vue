<template>
  <article class="news">
    <h2 class="news__header-text">Новини</h2>
    <div class="news__container">
      <article class="news__item">
        <time class="news__item-time">
          <img src="" alt="" />
          16/03/2017
        </time>
        <h3 class="news__item-header-text">Макетні плати, зєднувачі та корпуса виробника E-CALL</h3>
        <p class="news__item-text-description">
          Розширення асортименту по макетним платам, зєднувачам до них та корпусах від виробника
          <a href="#" class="news__item-text-description-link">E-CALL</a>
        </p>
        <p class="news__item-links">
          <a class="news__item-links-item" href="">Корпуса</a>
          <a class="news__item-links-item" href="">Зєднувачі</a>
          <a class="news__item-links-item" href="">Макетні плати</a>
        </p>
        <p class="news__item-footer">
          Подивитися повний список поставок можна за
          <a class="common-link news__item-footer-link" href="">посиланням</a> або на сторінках
          нашого <a class="common-link news__item-footer-link" href="">сайта</a>.
        </p>
      </article>
      <article class="news__item">
        <time class="news__item-time">
          <img src="" alt="" />
          16/03/2017
        </time>
        <h3 class="news__item-header-text">Макетні плати, зєднувачі та корпуса виробника E-CALL</h3>
        <p class="news__item-text-description">
          Розширення асортименту по макетним платам, зєднувачам до них та корпусах від виробника
          <a href="#" class="news__item-text-description-link">E-CALL</a>
        </p>
        <p class="news__item-links">
          <a class="news__item-links-item" href="">Корпуса</a>
          <a class="news__item-links-item" href="">Зєднувачі</a>
          <a class="news__item-links-item" href="">Макетні плати</a>
        </p>
        <p class="news__item-footer">
          Подивитися повний список поставок можна за
          <a class="common-link news__item-footer-link" href="">посиланням</a> або на сторінках
          нашого <a class="common-link news__item-footer-link" href="">сайта</a>.
        </p>
      </article>
      <article class="news__item">
        <time class="news__item-time">
          <img src="" alt="" />
          16/03/2017
        </time>
        <h3 class="news__item-header-text">Макетні плати, зєднувачі та корпуса виробника E-CALL</h3>
        <p class="news__item-text-description">
          Розширення асортименту по макетним платам, зєднувачам до них та корпусах від виробника
          <a href="#" class="news__item-text-description-link">E-CALL</a>
        </p>
        <p class="news__item-links">
          <a class="news__item-links-item" href="">Корпуса</a>
          <a class="news__item-links-item" href="">Зєднувачі</a>
          <a class="news__item-links-item" href="">Макетні плати</a>
        </p>
        <p class="news__item-footer">
          Подивитися повний список поставок можна за
          <a class="common-link news__item-footer-link" href="">посиланням</a> або на сторінках
          нашого <a class="common-link news__item-footer-link" href="">сайта</a>.
        </p>
      </article>
      <article class="news__item">
        <time class="news__item-time">
          <img src="" alt="" />
          16/03/2017
        </time>
        <h3 class="news__item-header-text">Макетні плати, зєднувачі та корпуса виробника E-CALL</h3>
        <p class="news__item-text-description">
          Розширення асортименту по макетним платам, зєднувачам до них та корпусах від виробника
          <a href="#" class="news__item-text-description-link">E-CALL</a>
        </p>
        <p class="news__item-links">
          <a class="news__item-links-item" href="">Корпуса</a>
          <a class="news__item-links-item" href="">Зєднувачі</a>
          <a class="news__item-links-item" href="">Макетні плати</a>
        </p>
        <p class="news__item-footer">
          Подивитися повний список поставок можна за
          <a class="common-link news__item-footer-link" href="">посиланням</a> або на сторінках
          нашого <a class="common-link news__item-footer-link" href="">сайта</a>.
        </p>
      </article>
    </div>
    <div class="news__footer">
      <a class="news__footer-link" href="#">Читати всі новини</a>
    </div>
  </article>
</template>

<style lang="scss">
.news {
  &__header-text {
    padding-bottom: 26px;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__item {
    max-width: 435px;
    min-height: 200px;

    &-time {
      display: block;
      font-size: 1.2rem;
      letter-spacing: 1px;
      color: var(--color-gray-dark);
      padding-bottom: 8px;
    }

    &-header-text {
      font-weight: 700;
      font-size: 1.6rem;
      padding-bottom: 10px;
    }
    &-text-description {
      font-size: 1.4rem;
      padding-bottom: 22px;
      &-link {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--color-blue-dark);
        font-weight: 700;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    &-links {
      display: flex;
      padding-bottom: 22px;
      &-item {
        padding-right: 36px;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--color-blue-dark);
        font-weight: 700;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    &-footer {
      font-size: 1.4rem;
      &-link {
        font-weight: inherit;
      }
    }
  }

  &__footer {
    text-align: right;
    padding: 26px 0;

    &-link {
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--blue-light);
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
