import { ref } from "vue";

export const useToggleView = (components: string[]) => {
  const view = ref<string>(components[0]);

  const toggleView = (data: boolean) => {
    view.value = components[Number(data)];
  };

  return {
    view,
    toggleView,
  };
};
