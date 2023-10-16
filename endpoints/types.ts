import type { UserRegistration, UserClientData } from "../dto/User";
import type {
  OrderRequestBody,
  OrderResponse,
  OrdersRequestBody,
  OrdersResponse,
} from "../dto/Order";

export interface DefaultResponse {
  ok: boolean;
  message?: string;
}

export interface APILogin {
  url: "/api/login";
  method: "post";
  request: UserRegistration;
  response: UserClientData | DefaultResponse;
}

export interface APIOrder {
  url: "/api/order";
  method: "post";
  request: OrderRequestBody | OrdersRequestBody;
  response: OrderResponse | OrdersResponse;
}
