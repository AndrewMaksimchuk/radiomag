import type { Slider } from "../../../dto/Slider";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GET } from "../httpClient";

export const useSlider = defineStore("slider", () => {
  const defaultQuantity = 5;
  const numberOfShowedCards = ref(defaultQuantity);
  const data = ref<Slider>([]);
  const activeButton = ref(1);

  const length = computed(() => data.value.length);

  const numberOfButtons = computed(() =>
    Math.ceil(data.value.length / numberOfShowedCards.value)
  );

  const toShow = computed(() => {
    const start = (activeButton.value - 1) * numberOfShowedCards.value;
    const end = start + numberOfShowedCards.value;
    return data.value.slice(start, end);
  });

  const active = (item: number) => (activeButton.value = item);

  const load = async () => {
    const [error, updatableValue] = await GET.slider();
    if (error) return "";
    return (data.value = updatableValue);
  };

  const setNumberShowedCards = (num: number = defaultQuantity) =>
    (numberOfShowedCards.value = num);

  return {
    data,
    length,
    activeButton,
    numberOfButtons,
    toShow,
    active,
    load,
    numberOfShowedCards,
    setNumberShowedCards,
  };
});
