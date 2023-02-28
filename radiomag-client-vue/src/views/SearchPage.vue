//
https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=search&query=mega328
<template>
  <section class="container search-box">
    <h2 class="search-box__header-text">
      {{ $t("search") }} "{{ $route.params.name }}":
    </h2>
    <!-- <CardLine/> -->
    <!-- <CardLine/> -->
    <!-- <CardLine/> -->
  </section>
</template>

<style lang="scss">
.search-box {
  min-height: 100vh;
  padding-bottom: 23px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;

  &__header-text {
    padding-bottom: 23px;
  }
}
</style>
