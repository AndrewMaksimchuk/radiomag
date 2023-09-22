import type { PropType } from "vue";
import type { Cart } from "$/dto/Cart";
import { defineComponent } from "vue";
import { OrderForm } from "@/components/OrderFormComponent";
import OrderTable from "@/components/OrderTableComponent.vue";
import OrderCard from "@/components/OrderCardComponent.vue";

export default defineComponent({
  components: {
    OrderCard,
    OrderForm,
    OrderTable,
  },
  props: {
    cart: {
      require: true,
      type: Object as PropType<Cart>,
    },
  },
});
