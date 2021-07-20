<template>
  <div class="modal-window container">
    <header class="modal-window__header">
      <h2 class="modal-window__header-text">Електронні компоненти та комплектуючі</h2>
      <button class="modal-window__header-close-button close-button" @click="hideModalWindow">
        <div class="close-button__line"></div>
        <div class="close-button__line close-button__line_rotate-180"></div>
      </button>
    </header>
    <div class="modal-window__slot">
      <ModalWindowItem v-for="item in dataOfModalWindow" :key="item.id" :data='item'/>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalWindowItem from './ModalWindowItem.vue';

export default {
  name: 'ModalWindow',
  components: {
    ModalWindowItem,
  },
  methods: {
    hideModalWindow() {
      this.$store.commit('hideModalWindow');
    },
  },
  computed: {
    ...mapGetters(['dataOfModalWindow']),
  },
};
</script>

<style lang="scss">
.close-button {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  position: relative;
  opacity: .3;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &__line {
    position: absolute;
    width: 100%;
    height: 6px;
    background-color: #fff;
    left: 0;
    transform: rotate(45deg);

    &_rotate-180 {
      transform: rotate(-45deg);
    }
  }
}

.modal-window {
  min-width: 100px;
  border: 1px solid #d8d8d8;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  // box-shadow: 0 0 0 9999px #000000b0;

  &__header {
    width: 100%;
    padding: 18px;
    font-size: 1.8rem;
    color: #fff;
    background-color: #2d7dbc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-text {
    margin: 0;
    }
    &-close-button {
      width: 24px;
      height: 24px;
    }
  }

  &__slot {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // column-gap: 20px;
    // row-gap: 20px; // 90px
    background-color: #fff;
    padding: 20px;
    // justify-content: space-around;
  }

}
</style>
