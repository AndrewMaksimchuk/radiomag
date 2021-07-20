<template>
  <div class="popular-products">
    <h2 class="popular-products__heaer-text">Популярні товари</h2>
    <Slider/>
</div>
</template>
<script>
import Slider from './Slider.vue';

export default {
  name: 'PopularProducts',
  components: {
    Slider,
  },
};
</script>

<style lang="scss">
.popular-products {
    &__heaer-text {
        font-size: 1.8rem;
        padding-bottom: 22px;
    }
}
</style>
