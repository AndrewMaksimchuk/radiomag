// https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=search&query=mega328
<template>
  <section class="container search-box">
    <h2 class="search-box__header-text">Результат пошуку для "{{ $route.params.name }}":</h2>
    <CardLine/>
    <CardLine/>
    <CardLine/>
  </section>
</template>

<script>
import CardLine from '@/components/CardLine.vue';

export default {
  name: 'Search',
  components: {
    CardLine,
  },
  created() {
    // console.log(this.$route.params.name);
  },
};
</script>

<style lang="scss">
.search-box {
  padding-bottom: 23px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;

  &__header-text {
    padding-bottom: 23px;
  }
}
</style>
