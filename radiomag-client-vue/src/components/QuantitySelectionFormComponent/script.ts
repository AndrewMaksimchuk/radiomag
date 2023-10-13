import type { PropType } from "vue";
import { ref, defineComponent } from "vue";
import { selectText } from "./functions/selectText";
import { useWatch } from "./functions/useWatch";
import { useHooks } from "./functions/useHooks";
import { useUpdateInputValue } from "./functions/updateInputValue";
import { useAddToCart } from "./functions/useAddToCart";
import { useChangeInputValue } from "./functions/useChangeInputValue";
import { useChangeQuantityOfProduct } from "./functions/useChangeQuantityOfProduct";

export default defineComponent({
  props: {
    quantityOfProduct: {
      required: true,
      type: Number as PropType<number>,
    },
  },
  emits: ["addToCart", "changeQuantityOfProduct"],
  setup(props, { emit }) {
    const inputValue = ref(1);
    const isAddedToCart = ref(false);
    const composableParams = { props, inputValue };
    useWatch(composableParams);
    useHooks(composableParams);
    const updateInputValue = useUpdateInputValue(composableParams);
    const changeInputValue = useChangeInputValue(
      inputValue,
      emit,
      updateInputValue
    );
    const addToCart = useAddToCart(isAddedToCart, emit);
    const changeQuantityOfProduct = useChangeQuantityOfProduct(
      inputValue,
      emit
    );

    return {
      inputValue,
      isAddedToCart,
      changeQuantityOfProduct,
      changeInputValue,
      addToCart,
      selectText,
    };
  },
});
