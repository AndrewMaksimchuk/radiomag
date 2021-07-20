<template>
  <div class="map">
    <!-- temporarily -->
    <img
      class="map__img"
      src="@/assets/images/map.png"
      alt="">
  </div>
</template>

<script>
export default {
  name: 'Map',
};
</script>

<style lang="scss">
.map {
  width: 825px;
  height: 585px;
  background-color: var(--color-gray-dark);

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
