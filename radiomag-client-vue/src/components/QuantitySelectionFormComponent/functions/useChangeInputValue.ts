import type { Ref } from "vue";

export const useChangeInputValue = (
  inputValue: Ref<number>,
  emit: { (e: "changeQuantityOfProduct", value: number): void },
  updateInputValue: () => number
) => {
  const changeInputValue = () => {
    updateInputValue();
    emit("changeQuantityOfProduct", inputValue.value);
  };

  return changeInputValue;
};
