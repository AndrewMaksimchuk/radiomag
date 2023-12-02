import type { UnwrapRef } from "vue";
import type { UseShowDetailsParams } from "./types";
import type { Orders } from "$/dto/Order";
import type { Prettify } from "$/utiliti-types";

type T = Prettify<Orders[number]>;
type K = keyof T;
type Data = T[K];

interface DialogSetComponentParams {
  data: Data;
  component: UnwrapRef<UseShowDetailsParams["dialogComponent"]>;
  tableData: UnwrapRef<UseShowDetailsParams["dialogTableData"]>;
  columns: UnwrapRef<UseShowDetailsParams["dialogColumns"]>;
}

export const dialogSetComponent = (
  dialogProps: Required<Omit<UseShowDetailsParams, "dialogTitle">>
) => {
  return (params: DialogSetComponentParams) => {
    if (params.data) {
      dialogProps.dialogComponent.value = params.component;
      dialogProps.dialogTableData.value = params.tableData;
      dialogProps.dialogColumns.value = params.columns;
    }
  };
};
