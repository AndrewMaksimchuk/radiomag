<template>
  <article class="linecard borders">
    <h2 class="linecard__header-text">Бюлетень</h2>
    <form class="linecard__form" action="#">
      <label class="linecard__form-label" for="email"
        >Інформація про події, акції та новий товар прямо у ваш кошик.</label
      >
      <input
        type="email"
        required
        name="email"
        id="email"
        class="linecard__form-select bulletin__input"
        placeholder="Напишіть ваший E-mail"
      />
      <button class="linecard__form-submit cursor-pointer" type="submit">Записатися</button>
    </form>
  </article>
</template>

<style lang="scss">

.bulletin__input {
  font-size: 1.3rem;
  padding: 5px;

  &:hover {
    cursor: text;
  }
}

</style>
