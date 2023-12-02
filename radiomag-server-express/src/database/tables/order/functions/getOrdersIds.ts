import type { Orders } from "$/dto/Order";

export const getOrdersIds = (orders: Orders) => {
  return orders.map((value) => {
    return value.formId;
  });
};
