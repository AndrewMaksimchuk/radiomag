<template>
  <section class="contacts-section">

    <h2 class="contacts-section__header-text">{{ headerText }}</h2>

    <div class="contacts-section__container">

      <slot></slot>

    </div>

  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    headerText: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss">
.contacts-section {
  padding-bottom: 23px;

  &__header-text {
    padding-bottom: 25px;
  }

  &__container {
    width: 100%;
    display: flex;
    column-gap: 32px;
  }
}
</style>
