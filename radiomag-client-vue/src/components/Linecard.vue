<template>
  <article class="linecard borders">
    <h2 class="linecard__header-text">Linecard</h2>
    <form class="linecard__form" action="#">
      <label class="linecard__form-label"
        >Щоб побачити вироби, виберіть виробника або категорію.</label
      >
      <select name="productions" class="linecard__form-select">
        <option value="" class="linecard__form-option">Всі виробники</option>
      </select>
      <select name="categories" class="linecard__form-select">
        <option value="" class="linecard__form-option">Всі категорії</option>
      </select>
      <button class="linecard__form-submit cursor-pointer" type="submit">Показати</button>
    </form>
  </article>
</template>

<script>
export default {
  name: 'Linecard',
};
</script>

<style lang="scss">
.linecard {
  width: var(--width-card);
  background-color: var(--color-white);
  &__header-text {
    color: var(--color-white);
    background-color: var(--blue-light);
    width: 100%;
    padding: 11px;
    font-size: 1.6rem;
  }
  &__form {
    width: 100%;
    padding: 18px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-label {
      font-size: 1.4rem;
      letter-spacing: 1px;
      line-height: 1.6;
      padding-bottom: 34px;
    }
    &-select {
      width: 100%;
      border: none;
      font-size: 1.1rem;
      font-weight: 700;
      padding: 7px 0;
      border-bottom: 1px solid var(--color-gray-light);
      margin-bottom: 23px;
      letter-spacing: 1px;
      &:hover {
        cursor: pointer;
      }
    }
    &-option {
    }
    &-submit {
      width: 164px;
      height: 45px;
      color: var(--color-white);
      background-color: var(--color-red);
      border: none;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
