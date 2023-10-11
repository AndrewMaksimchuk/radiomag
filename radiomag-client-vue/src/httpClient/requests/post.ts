import type { DefaultResponse } from "$/endpoints/types";
import type {
  OrderRequestBody,
  OrderResponse,
  OrdersRequestBody,
  OrdersResponse,
} from "$/dto/Order";
import type { PingPayload } from "$/dto/Ping";
import type { Bulletin } from "$/dto/Bulletin";
import type { UserRegistration, UserClientData } from "$/dto/User";
import { HTTPpost } from "../../../../endpoints";
import POSTRequest from "../methods/POST";

export const POST = {
  order: async (data: OrderRequestBody | OrdersRequestBody) => {
    return await POSTRequest<OrderResponse | OrdersResponse>(
      HTTPpost.order,
      data
    );
  },
  error: async (data: Record<string, unknown>) => {
    return await POSTRequest<DefaultResponse>(HTTPpost.error, data);
  },
  ping: (data: PingPayload) => {
    POSTRequest(HTTPpost.ping, data);
  },
  bulletin: async (data: Bulletin) => {
    return POSTRequest<DefaultResponse>(HTTPpost.bulletin, data);
  },
  login: async (data: UserRegistration) => {
    return POSTRequest<UserClientData | DefaultResponse>(HTTPpost.login, data);
  },
};
