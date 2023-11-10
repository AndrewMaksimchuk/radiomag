import type { PropType } from "vue";
import type { WorkerProduct } from "$/dto/Product";

export const props = {
  product: {
    require: true,
    type: Object as PropType<WorkerProduct>,
    default: () => {
      return {};
    },
  },
  filterHeaders: {
    require: true,
    type: Array as PropType<string[]>,
    default: () => {
      return [];
    },
  },
};

export type CardTableProps = typeof props;
