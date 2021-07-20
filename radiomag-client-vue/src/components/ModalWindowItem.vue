<template>

  <router-link class="modal-window-item"
    :to="{ name: 'group', params: { id: data.id, groupName: data.name } }"
    @click="hideModalWindow">
    <img class="modal-window-item__img" :src="'images/groups/' + data.img" :alt="data.name">
    <p class="modal-window-item__text">{{ data.name }}</p>
  </router-link>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ModalWindowItem',
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['dataOfModalWindow']),
  },
  methods: {
    hideModalWindow() {
      this.$store.commit('hideModalWindow');
    },
  },
};
</script>

<style lang="scss">
.modal-window-item {
  width: 150px;
  height: 230px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--color-black-light);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    border: 1px solid var(--color-gray-light);
    border-radius: 5px;

    & .modal-window-item__img {
      transform: scale(1.1);
    }
  }

  &__img {
    width: 120px;
    max-height: 120px;
    padding-bottom: 5px;
  }

  &__text {
    font-size: 1.8rem;
    text-align: center;
  }
}
</style>
