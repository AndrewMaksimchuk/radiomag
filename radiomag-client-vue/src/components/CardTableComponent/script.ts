import { defineComponent } from "vue";
import { props } from "./scripts/props";
import { useTitleStock } from "./scripts/useTitleStock";
import { useAddGoodsToStorage } from "@/utils/useAddGoodsToStorage";
import { components } from "./scripts/components";

export default defineComponent({
  components,
  props,
  setup(props) {
    const setTitleStock = useTitleStock(props.product);

    const addGoodsToStorage = useAddGoodsToStorage({
      filterHeaders: props.filterHeaders,
      product: props.product,
    });

    return {
      setTitleStock,
      addGoodsToStorage,
    };
  },
});
