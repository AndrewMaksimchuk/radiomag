import { useRouter } from "vue-router";
import { POST } from "@/httpClient";
import { useCart } from "@/store/cart";
import { useUser } from "@/store/user";
import { validateComponents } from "@/utils/validateComponents";
import { useComponentsRefs } from "./componentsRefs";
import { useNotify } from "./notify";
import { getFormData } from "./getFormData";
import { createdDateTime } from "./createdDateTime";

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

    const form = getFormData();
    if (form === undefined) {
      return "Form not found";
    }

    const responseData = await POST.order({
      created: createdDateTime(),
      form,
      cart: storeCart.cart,
      user: storeUser.user,
    });

    if (responseData === undefined) {
      return notifyError();
    }

    notifySuccess();
    storeCart.clear();
    router.push("user");
  };

  return {
    sendFormData,
  };
};
