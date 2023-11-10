import type { Params } from "./type";
import { isGreaterThatZero } from "./isGreaterThatZero";

export const useUpdateInputValue = ({ props, inputValue }: Params) => {
  const updateInputValue = () => {
    return isGreaterThatZero(inputValue.value)
      ? inputValue.value
      : (inputValue.value = props.quantityOfProduct);
  };

  return updateInputValue;
};
