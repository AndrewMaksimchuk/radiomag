import type { OrderResponse, OrdersResponse } from "$/dto/Order";

export const isNotOrders = (
  response: OrderResponse | OrdersResponse
): response is OrderResponse => {
  return !("orders" in response);
};
