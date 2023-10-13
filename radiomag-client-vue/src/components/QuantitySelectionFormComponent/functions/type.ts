import type { Ref } from "vue";

export interface Params {
  props: {
    quantityOfProduct: number;
  };
  inputValue: Ref<number>;
}
