import type { Ref } from "vue";
import type { CartItem } from "$/dto/Cart";
import type { FormData } from "$/dto/Order";
import type { Columns, DialogComponent } from "./types";
import { useOrders } from "@/store/orders";
import { DIALOGCOLUMNSFORM } from "./dialogColumnsForm";
import { DIALOGCOLUMNSGOODS } from "./dialogColumnsGoods";

interface Params {
  dialogTitle: Ref<string | undefined>;
  dialogTableData: Ref<CartItem | FormData[] | undefined>;
  dialogColumns: Ref<Columns | undefined>;
  dialogComponent: Ref<DialogComponent>;
}

export const useShowDetails = ({
  dialogTitle,
  dialogTableData,
  dialogColumns,
  dialogComponent,
}: Params) => {
  const ordersStore = useOrders();

  const showDetails = (what: "goods" | "form", id: number, title: string) => {
    const order = ordersStore.orders.find((order) => {
      return order.id === id;
    });

    if (undefined === order) {
      return "Show notification: order not found";
    }

    dialogTitle.value = title;

    if ("goods" === what) {
      const orderGoods = order?.items;
      if (undefined === orderGoods) {
        return;
      }
      dialogComponent.value = "DialogGoods";
      dialogTableData.value = JSON.parse(orderGoods);
      dialogColumns.value = DIALOGCOLUMNSGOODS;
    }

    if ("form" === what) {
      if (undefined === order.form) {
        return "Show notification: form not available";
      }
      dialogComponent.value = "DialogForm";
      dialogTableData.value = [order.form];
      dialogColumns.value = DIALOGCOLUMNSFORM;
    }
  };

  return {
    showDetails,
  };
};
