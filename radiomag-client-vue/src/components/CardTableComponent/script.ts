import { defineComponent } from "vue";
import { props } from "./scripts/props";
import { setTitleStock } from "./scripts/useTitleStock";
import { useAddGoodsToStorage } from "@/utils/useAddGoodsToStorage";
import { components } from "./scripts/components";

export default defineComponent({
  components,
  props,
  setup(props) {
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
