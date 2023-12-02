import type { OrderFormTableRow } from "../orderForm/type";

export const GETALLBYUSERSELECTPARAMS = [
  "order.id",
  "order.created",
  "order.formId",
  "order.cartId",
  "order.status",
  "order.closed",
  "cart.items",
  "cart.totalCost",
];

export const EMPTY_ORDER_FORM: OrderFormTableRow = {
  id: 0,
  address: "",
  city: "",
  comment: "",
  contactPerson: "",
  email: "",
  recipient: "",
  subscriptions: "creditCard",
  telFax: "",
  typeOfDelivery: "selfPickup",
  unit: 0,
};
