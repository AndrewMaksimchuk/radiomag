import type { PropType } from "vue";
import type { WorkerProduct } from "$/dto/Product";
import { defineComponent } from "vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useGoods } from "@/store/goods";
import { PingService } from "@/services/PingService";

export default defineComponent({
  props: {
    product: {
      required: true,
      type: Object as PropType<WorkerProduct>,
    },
    filterHeaders: {
      required: true,
      type: Array as PropType<string[]>,
    },
  },
  setup(props) {
    const router = useRouter();
    const storeGoods = useGoods();

    const sumOfAllDescription = computed(() => {
      return props.product.description.reduce((total, currentValue, index) => {
        if (0 === index || currentValue === undefined) {
          return total;
        }
        return `${total + currentValue} `;
      }, "");
    });

    const addGoodsToStorage = () => {
      storeGoods.add({
        product: props.product,
        filterHeaders: props.filterHeaders,
      });
      PingService.ping({
        action: "go to page",
        to: router.resolve({
          name: "goods",
          params: { code: props.product.id },
        }).fullPath,
      });
    };
    return {
      storeGoods,
      sumOfAllDescription,
      addGoodsToStorage,
    };
  },
});
