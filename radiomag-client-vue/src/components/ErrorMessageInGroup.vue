<template>
  <div class="error-in-group">
    <h2 class="error-in-group__message">{{ errorMessage }} &#9785;</h2>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessageInGroup',
  props: {
    errorMessage: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss">
.error-in-group {
  color: var(--color-red);
  padding-bottom: 100px;

  &__message {
    font-size: 2.4rem;
    white-space: pre-wrap;
  }
}
</style>
