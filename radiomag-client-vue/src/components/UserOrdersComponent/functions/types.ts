import type { Ref } from "vue";
import type { CartItem } from "$/dto/Cart";
import type { FormData } from "$/dto/Order";
import type { DialogComponent } from "./dialogComponent";

export type Columns = {
  property: string; // DialogTableData[key]
  label: string; // I18nkey
}[];

export interface UseShowDetailsParams {
  dialogTitle: Ref<string | undefined>;
  dialogTableData: Ref<CartItem[] | FormData[] | undefined>;
  dialogColumns: Ref<Columns | undefined>;
  dialogComponent: Ref<DialogComponent>;
}
