import { onBeforeMount } from "vue";
import type { Ref } from "vue";

interface Params {
  props: {
    quantityOfProduct: number;
  };
  inputValue: Ref<number>;
}

export const useHooks = ({ props, inputValue }: Params) => {
  onBeforeMount(() => {
    return (inputValue.value = props.quantityOfProduct);
  });
};
