<template>
  <section class="notify">
    <p>{{ $t("order.form.notify[0]") }}</p>
    <p>{{ $t("order.form.notify[1]") }}</p>
    <p>{{ $t("order.form.notify[2]") }}</p>
  </section>
</template>

<style lang="scss">
.notify {
  padding-bottom: 50px;
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-transform: uppercase;

  @media (max-width: $breakpoint-mobile) {
    padding-bottom: 37px;
    font-size: 1.4rem;
    line-height: 2rem;
  }
}
</style>
