import type { FormData, OrderResponse } from "../../../../dto/Order";
import type { PingPayload } from "../../../../dto/Ping";
import { HTTPpost } from "../../../../endpoints";
import POSTRequest from "../methods/POST";

export interface DefaultResponse {
  ok: boolean;
}

export const POST = {
  order: async (data: FormData) => {
    return await POSTRequest<OrderResponse>(HTTPpost.order, data);
  },
  error: async (data: Record<string, unknown>) => {
    return await POSTRequest<DefaultResponse>(HTTPpost.error, data);
  },
  ping: (data: PingPayload) => {
    POSTRequest(HTTPpost.ping, data);
  },
};
