import type { CartItem } from "$/dto/Cart";
import type { FormData, Orders } from "$/dto/Order";
import type { UseShowDetailsParams } from "./types";
import type { DialogComponent } from "./dialogComponent";
import { dialogComponents } from "./dialogComponent";
import { DIALOG_COLUMNS_FORM } from "./dialogColumnsForm";
import { DIALOG_COLUMNS_GOODS } from "./dialogColumnsGoods";
import { dialogSetComponent } from "./dialogSetComponent";
import { dialogPrepareData } from "./dialogPrepareData";
import { setCorrectUnitName } from "./setCorrectUnitName";

export const selectComponent = (
  dialogProps: UseShowDetailsParams,
  what: DialogComponent,
  order: Orders[number]
) => {
  const isComponent = dialogSetComponent(dialogProps);

  switch (what) {
    case dialogComponents.DialogGoods:
      isComponent({
        data: order.items,
        component: dialogComponents.DialogGoods,
        tableData: dialogPrepareData<CartItem>(JSON.parse(order.items)),
        columns: DIALOG_COLUMNS_GOODS,
      });
      break;
    case dialogComponents.DialogForm:
      isComponent({
        data: order.form,
        component: dialogComponents.DialogForm,
        tableData: dialogPrepareData<FormData>([
          setCorrectUnitName(order.form, order.manager),
        ]),
        columns: DIALOG_COLUMNS_FORM,
      });
      break;
  }
};
