import type { CartItem } from "$/dto/Cart";
import type { FormData } from "$/dto/Order";
import type { Columns, DialogComponent } from "./types";
import { ref, computed } from "vue";
import { useShowDetails } from "./showDetails";

export const useDialog = () => {
  const dialogTitle = ref<string>();
  const dialogTableData = ref<CartItem | FormData[]>();
  const dialogColumns = ref<Columns>();
  const dialogComponent = ref<DialogComponent>("DialogGoods");

  const dialogTableVisible = computed(() => {
    return Boolean(dialogTableData.value);
  });

  const dialogTableClose = () => {
    dialogTableData.value = undefined;
  };

  const { showDetails } = useShowDetails({
    dialogTitle,
    dialogTableData,
    dialogColumns,
    dialogComponent,
  });

  return {
    dialogTitle,
    dialogTableData,
    dialogColumns,
    dialogTableVisible,
    dialogComponent,
    dialogTableClose,
    showDetails,
  };
};
