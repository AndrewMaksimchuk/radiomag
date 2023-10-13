import type { Ref } from "vue";
import type { WorkerProduct } from "@/public/types";
import { useCart } from "@/store/cart";
import { PingService } from "@/services/PingService";

export const useAddToCart = (
  props: {
    product: WorkerProduct;
    filterHeaders: string[];
  },
  quantityOfProduct: Ref<number>
) => {
  const storeCart = useCart();

  const addToCart = () => {
    const payload = {
      product: props.product,
      quantity: quantityOfProduct.value,
    };
    PingService.ping({ action: "action", todo: "cart add", payload });
    storeCart.add(payload);
  };

  return addToCart;
};
