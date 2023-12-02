import { defineComponent, onBeforeMount } from "vue";
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElDialog,
  ElTooltip,
} from "element-plus";
import { useOrders } from "@/store/orders";
import { useDialog } from "./functions/useDialog";
import { DialogGoods } from "./components/DialogGoodsComponent";
import { DialogForm } from "./components/DialogFormComponent";
import "element-plus/es/components/table/style/css";
import "element-plus/es/components/button/style/css";
import "element-plus/es/components/dialog/style/css";
import "element-plus/es/components/tooltip/style/css";

export default defineComponent({
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
    ElDialog,
    DialogGoods,
    DialogForm,
    ElTooltip,
  },
  setup() {
    const ordersStore = useOrders();
    const {
      dialogTableData,
      dialogTableVisible,
      dialogComponent,
      dialogTableClose,
      showDetails,
      dialogTitle,
      dialogColumns,
    } = useDialog();

    onBeforeMount(() => {
      ordersStore.getOrders(true);
    });

    return {
      ordersStore,
      showDetails,
      dialogTableVisible,
      dialogComponent,
      dialogTableData,
      dialogTableClose,
      dialogTitle,
      dialogColumns,
    };
  },
});
