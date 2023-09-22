import { defineComponent } from "vue";
import { useCart } from "@/store/cart";
import { Order } from "@/components";
import { OrderContactForm } from "@/components";

export default defineComponent({
  components: {
    Order,
    OrderContactForm,
  },
  setup() {
    const store = useCart();

    return {
      store,
    };
  },
});
