<template>
  <button class="to-up-button" @click="toUp">
    <svg
      class="to-up-button__image"
      width="67.733mm"
      height="41.853mm"
      version="1.1"
      viewBox="0 0 67.733 41.853"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-.1263 -.060482)">
        <g transform="matrix(0 -.26458 .26458 0 1.6631 55.789)">
          <polygon
            transform="translate(3.5355 -5.8084)"
            points="48.907 30.187 146.72 128 48.907 225.81 79.093 256 207.09 128 79.093 0"
          />
        </g>
      </g>
    </svg>
    <span class="to-up-button__text">Догори</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonToUp',
  methods: {
    toUp() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.to-up-button {
  --size: 60px;
  min-width: 100%;
  height: var(--size);
  padding: 0;
  border: none;
  background: none;
  position: relative;
  top: 0;
  z-index: 1;
  transform: translateY(-50%);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: var(--blue-medium);
    z-index: -1;
  }

  &::after {
    content: "";
    width: var(--size);
    height: var(--size);
    position: absolute;
    background-color: var(--blue-medium);
    border-radius: 6px;
    top: 0;
    left: calc(50% - var(--size) / 2);
    z-index: -1;
    transform: rotate(45deg);
  }

  &:hover {
    cursor: pointer;
  }

  &__image {
    --icon-size: calc(var(--size) / 3);
    max-width: var(--icon-size);
    max-height: var(--icon-size);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    fill: #fff;
  }

  &__text {
    display: block;
    text-transform: uppercase;
    color: var(--color-white);
    letter-spacing: 1px;
    font-size: calc(var(--size) / 5);
  }
}
</style>
