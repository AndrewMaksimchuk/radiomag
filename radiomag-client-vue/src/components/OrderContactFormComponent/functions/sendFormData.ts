import { useRouter } from "vue-router";
import { useCart } from "@/store/cart";
import { useUser } from "@/store/user";
import { validateComponents } from "@/utils/validateComponents";
import { useComponentsRefs } from "./componentsRefs";
import { useNotify } from "./notify";
import { isOrderResponse } from "./isOrderResponse";
import { useFormResponse } from "./formResponse";

export const useSendFormData = () => {
  const { componentsRefs } = useComponentsRefs();
  const { notifySuccess, notifyWarning, notifyError } = useNotify();
  const storeCart = useCart();
  const storeUser = useUser();
  const router = useRouter();

  const sendFormData = async (event: Event) => {
    event.preventDefault();
    const validRes = validateComponents(componentsRefs);
    if (validRes) {
      return notifyWarning();
    }

    const responseData = await useFormResponse({
      storeCart,
      storeUser,
    });
    if (responseData === undefined) {
      return notifyError();
    }

    if (false === responseData.ok) {
      return notifyWarning();
    }

    notifySuccess();
    storeCart.clear();

    if (isOrderResponse(responseData) && responseData.newUser) {
      storeUser.set(responseData.newUser);
    }

    router.push("user");
  };

  return {
    sendFormData,
  };
};
