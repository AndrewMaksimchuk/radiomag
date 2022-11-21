import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePagination = defineStore("pagination", () => {
  const length = ref(0);
  const onPage = ref(25);
  const activePage = ref(1);
  const numberOfButtonsDisplayed = ref(10);

  const numberOfButtons = computed(() =>
    Math.ceil(length.value / onPage.value)
  );

  const isLeftButtonDisabled = computed(() =>
    activePage.value === 1 ? true : false
  );

  const isRightButtonDisabled = computed(() =>
    activePage.value === numberOfButtons.value ? true : false
  );

  const whichButtonsDisplayed = computed(() => {
    let startPosition = 1;
    const numbersInButtons = [];
    const buttonsOnSide = numberOfButtonsDisplayed.value / 2;

    if (activePage.value - buttonsOnSide > 0) {
      startPosition = activePage.value - buttonsOnSide;
    }

    if (activePage.value + buttonsOnSide > numberOfButtons.value) {
      const startNumber = numberOfButtons.value - numberOfButtonsDisplayed.value + 1;
      return Array(numberOfButtonsDisplayed.value).fill(0).map((_, index) => startNumber + index);
    };

    for (let index = 1; index <= numberOfButtonsDisplayed.value; index++) {
      numbersInButtons.push(startPosition);
      if (startPosition === numberOfButtons.value) break;
      startPosition += 1;
    }

    return numbersInButtons;
  });

  const getRange = computed(() => {
    const end = activePage.value * onPage.value;
    const start = end - onPage.value;
    return { start, end };
  });

  const setLength = (number) => (length.value = number);
  const setActive = (number) => (activePage.value = number);
  const moveLeft = () => (activePage.value -= 1);
  const moveRight = () => (activePage.value += 1);
  const toFirst = () => (activePage.value = 1);
  const toLast = () => (activePage.value = numberOfButtons.value);

  return {
    length,
    activePage,
    numberOfButtons,
    isLeftButtonDisabled,
    isRightButtonDisabled,
    whichButtonsDisplayed,
    getRange,
    setLength,
    setActive,
    moveLeft,
    moveRight,
    toFirst,
    toLast,
  };
});
