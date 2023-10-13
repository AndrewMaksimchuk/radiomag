import type { Ref } from "vue";
import { isZero } from "./isZero";

export const useChangeQuantityOfProduct = (
  inputValue: Ref<number>,
  emit: { (e: "changeQuantityOfProduct", value: number): void }
) => {
  const changeQuantityOfProduct = (sign: "+" | "-") => {
    let returnQuantityOfProduct = 0;

    "+" === sign
      ? (returnQuantityOfProduct = inputValue.value + 1)
      : (returnQuantityOfProduct = inputValue.value - 1);

    return isZero(returnQuantityOfProduct)
      ? undefined
      : emit("changeQuantityOfProduct", returnQuantityOfProduct);
  };

  return changeQuantityOfProduct;
};
