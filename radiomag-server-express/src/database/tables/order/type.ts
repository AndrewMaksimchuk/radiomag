import type { CartTableRow } from "../cart/type";

export interface OrderTableRow {
  id: number;
  created: string;
  cartId: number;
  formId: number;
  userId: string;
}

export interface OrdersUser extends Omit<OrderTableRow, "userId"> {
  data: CartTableRow["data"];
}
