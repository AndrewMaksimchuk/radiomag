import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GET } from "../httpClient";

export const useSlider = defineStore("slider", () => {
  const numberOfShowedCards = 5;
  const data = ref<Slider>([]);
  const activeButton = ref(1);

  const length = computed(() => data.value.length);

  const numberOfButtons = computed(() =>
    Math.ceil(data.value.length / numberOfShowedCards)
  );

  const toShow = computed(() => {
    const start = (activeButton.value - 1) * numberOfShowedCards;
    const end = start + numberOfShowedCards;
    return data.value.slice(start, end);
  });

  const active = (item: number) => (activeButton.value = item);

  const load = async () => {
    const [error, updatableValue] = await GET.slider();
    if (error) return '';
    return data.value = updatableValue;
  };

  return { data, length, activeButton, numberOfButtons, toShow, active, load };
});
