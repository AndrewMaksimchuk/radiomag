import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

const quantity = [10, 30, 50, 100, 150, 200, 250] as const;
type Quantity = typeof quantity[number];

const localStorage = useLocalStorage<Quantity>("pagination", quantity[1]);

export const usePagination = defineStore("pagination", () => {
  const length = ref(0);
  const activePage = ref(1);
  const numberOfButtonsDisplayed = ref(10);
  const onPage = ref<Quantity>(localStorage.value || quantity[1]);

  const setOnPage = (newValue: Quantity) => {
    onPage.value = newValue;
    localStorage.value = newValue;
  };

  const numberOfButtons = computed(() =>
    Math.ceil(length.value / onPage.value)
  );

  const isLeftButtonDisabled = computed(() =>
    activePage.value === 1 ? true : false
  );

  const isRightButtonDisabled = computed(() =>
    activePage.value === numberOfButtons.value ? true : false
  );

  const setActive = (number: number) =>
    number > 0 ? (activePage.value = number) : (activePage.value = 1);

  const setDefault = () => (activePage.value = 1);

  const whichButtonsDisplayed = computed(() => {
    let startPosition = 1;
    const numbersInButtons = [];
    const buttonsOnSide = numberOfButtonsDisplayed.value / 2;

    if (numberOfButtons.value < numberOfButtonsDisplayed.value) {
      for (let index = 1; index <= numberOfButtons.value; index++) {
        numbersInButtons.push(startPosition);
        if (startPosition === numberOfButtons.value) break;
        startPosition += 1;
      }
      setActive(1);
      return numbersInButtons;
    }

    if (activePage.value - buttonsOnSide > 0) {
      startPosition = activePage.value - buttonsOnSide;
    }

    if (activePage.value + buttonsOnSide > numberOfButtons.value) {
      const startNumber =
        numberOfButtons.value - numberOfButtonsDisplayed.value + 1;
      return Array(numberOfButtonsDisplayed.value)
        .fill(0)
        .map((_, index) => startNumber + index);
    }

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

  const setLength = (number: number) => (length.value = number);
  const moveLeft = () => (activePage.value -= 1);
  const moveRight = () => (activePage.value += 1);
  const toFirst = () => (activePage.value = 1);
  const toLast = () => (activePage.value = numberOfButtons.value);

  return {
    length,
    onPage,
    quantity,
    activePage,
    numberOfButtons,
    isLeftButtonDisabled,
    isRightButtonDisabled,
    whichButtonsDisplayed,
    getRange,
    setOnPage,
    setLength,
    setActive,
    setDefault,
    moveLeft,
    moveRight,
    toFirst,
    toLast,
  };
});
