<template>
  <div class="pagination">
    <button
      class="pagination__button"
      @click="toFirstPage">
      На початок
    </button>

    <button
      class="pagination__button"
      :disabled="isLeftButtonDisabled"
      @click="moveLeft"
      >&#10094;</button>

      <PaginationButton
        class="pagination__button"
        v-for="(item, index) in whichButtonsDisplayed"
        :key="index"
        :page="page"
        @click="changePage($event)"
        :buttonNumber="item"/>

    <button
      class="pagination__button"
      :disabled="isRightButtonDisabled"
      @click="moveRight"
      >&#10095;</button>

    <button
      class="pagination__button"
      @click="toLastPage">
      У кінець
    </button>

    <!-- Maybe add select field for the number of products on the page -->
  </div>
</template>

<script>
import PaginationButton from './PaginationButton.vue';

export default {
  name: 'Pagination',
  components: {
    PaginationButton,
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
    productsOnPage: {
      type: Number,
      required: true,
    },
    lengthOfData: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      numberOfButtonsDisplayed: 10,
    };
  },
  computed: {
    isLeftButtonDisabled() {
      if (this.page === 1) return true;
      return false;
    },
    isRightButtonDisabled() {
      if (this.page === this.whichButtonsDisplayed) return true;
      return false;
    },
    numberOfButtons() {
      return Math.ceil(this.lengthOfData / this.productsOnPage);
    },
    whichButtonsDisplayed() {
      const buttonsOnSide = this.numberOfButtonsDisplayed / 2;
      let startPosition = 1;
      if (this.page - buttonsOnSide > 0) {
        startPosition = this.page - buttonsOnSide;
      }

      const numberOfButtons = [];

      for (let index = 1; index <= this.numberOfButtonsDisplayed; index += 1) {
        numberOfButtons.push(startPosition);
        if (startPosition === this.numberOfButtons) break;
        startPosition += 1;
      }

      return numberOfButtons;
    },
  },
  methods: {
    changePage(e) {
      const button = e.target;
      const numberOfPage = parseInt(button.textContent, 10);
      this.$emit('changePage', numberOfPage);
    },
    moveLeft() {
      if (this.isLeftButtonDisabled) {
        return;
      }
      this.$emit('movePageLeft');
    },
    moveRight() {
      if (this.isRightButtonDisabled) {
        return;
      }
      this.$emit('movePageRight');
    },
    toFirstPage() {
      this.$emit('toFirstPage');
    },
    toLastPage() {
      this.$emit('toLastPage', this.numberOfButtons);
    },
  },
};
</script>

<style lang="scss">
.pagination {
    width: 100%;
    padding: 14px 4px;
    color: var(--color-black-light);
    display: flex;
    align-items: center;
    column-gap: 4px;

    &__button {
      min-width: 24px;
      height: 24px;
      border: 1px solid var(--color-gray-light);
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: var(--blue-medium);
        cursor: pointer;
        color: var(--color-white);
      }

      &:disabled {
        cursor: not-allowed;
        background: none;
      }
    }
  }
</style>
