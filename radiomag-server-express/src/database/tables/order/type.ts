import type { CartTableRow } from "../cart/type";
import type { OrderFormTableRow } from "../orderForm/type";

export interface OrderTableRow {
  id: number;
  created: string;
  cartId: number;
  formId: number;
  userId: string;
  status: null | string;
  closed: null | string; // Datetime
}

export interface Order extends Omit<OrderTableRow, "userId"> {
  items: CartTableRow["items"];
  totalCost: CartTableRow["totalCost"];
  form: OrderFormTableRow;
}
