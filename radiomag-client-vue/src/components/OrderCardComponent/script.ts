import type { CartItem } from "$/dto/Cart";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { useCart } from "@/store/cart";
import { PingService } from "@/services/PingService";
import ProductAvailability from "@/components/ProductAvailability.vue";
import ProductPrice from "@/components/ProductPrice.vue";
import { QuantitySelectionForm } from "@/components";

export default defineComponent({
  components: {
    ProductAvailability,
    ProductPrice,
    QuantitySelectionForm,
  },
  props: {
    goods: {
      required: true,
      type: Object as PropType<CartItem>,
    },
    index: {
      required: true,
      type: Number as PropType<number>,
    },
  },
  setup(props) {
    const store = useCart();
    const changeQuantityOfProduct = (value: number) => {
      return store.changeQuantity({
        code: props.goods.product.id,
        quantity: value,
      });
    };

    const remove = () => {
      PingService.ping({
        action: "action",
        todo: "cart remove",
        payload: props.goods,
      });
      store.remove(props.index);
    };

    return {
      changeQuantityOfProduct,
      remove,
    };
  },
});
