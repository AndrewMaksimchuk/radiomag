import { defineComponent } from "vue";
import { useCart } from "@/store/cart";
import { getCurrency } from "@/utils/currency";
import { scrollIntoForm } from "@/components/OrderContactFormComponent/functions/scrollIntoForm";

export default defineComponent({
  setup() {
    const store = useCart();
    const currency = getCurrency();

    const clearCart = () => {
      store.clear();
      window.scrollTo(0, 0);
    };

    return {
      store,
      currency,
      clearCart,
      scrollIntoForm,
    };
  },
});
