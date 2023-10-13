import type { Ref } from "vue";
import { watch } from "vue";

interface Params {
  props: {
    quantityOfProduct: number;
  };
  inputValue: Ref<number>;
}

export const useWatch = ({ props, inputValue }: Params) => {
  watch(props, (value) => {
    inputValue.value = value.quantityOfProduct;
  });

  watch(inputValue, (value) => {
    return "string" === typeof value
      ? (inputValue.value = parseInt(value, 10))
      : undefined;
  });
};
