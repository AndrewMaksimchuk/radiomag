import type { OrderResponse, OrdersResponse } from "$/dto/Order";

export const isOrderResponse = (
  response: OrderResponse | OrdersResponse
): response is OrderResponse => {
  return "newUser" in response;
};
