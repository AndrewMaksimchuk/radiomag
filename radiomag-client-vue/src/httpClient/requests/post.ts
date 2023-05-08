import type { FormData, OrderResponse } from "../../../../dto/Order";
import { HTTPpost } from "../../../../endpoints";
import POSTRequest from "../methods/POST";

export const POST = {
  order: async (data: FormData) => {
    return await POSTRequest<OrderResponse>(HTTPpost.order, data);
  },
  error: async (data: Record<string, unknown>) => {
    return await POSTRequest<void>(HTTPpost.error, data);
  },
};
