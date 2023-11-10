import type { useCart } from "@/store/cart";
import type { useUser } from "@/store/user";
import { POST } from "@/httpClient";
import { getFormData } from "./getFormData";
import { createdDateTime } from "./createdDateTime";

interface FormResponseParams {
  storeCart: ReturnType<typeof useCart>;
  storeUser: ReturnType<typeof useUser>;
}

export const useFormResponse = ({
  storeCart,
  storeUser,
}: FormResponseParams) => {
  const form = getFormData();
  if (form === undefined) {
    return Promise.resolve(undefined); // "Form not found"
  }

  return POST.order({
    created: createdDateTime(),
    form,
    cart: {
      items: storeCart.cart,
      totalCost: storeCart.totalCost,
    },
    user: storeUser.user,
    manager: "", // TODO: Move to form entity
    status: "orders.window.orders.tableBody.status.waitingForPayment",
    closed: "",
  });
};
