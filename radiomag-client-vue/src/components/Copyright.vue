<template>
  <section class="copyright">
    &copy; 2021 Радіомаг
  </section>
</template>

<script>
export default {
  name: 'Copyright',
};
</script>

<style lang="scss">
.copyright {
  height: 60px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-white);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    min-width: 100%;
    height: 60px;
    background-color: var(--blue-medium);
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
