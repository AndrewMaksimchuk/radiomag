import { HTTPpost } from "../../../../endpoints";
import POSTdata from "../methods/POST";

export const POST = {
  order: async (data: unknown): Promise<unknown> => {
    const response = await POSTdata(HTTPpost.order, data);
    return await response.json();
  },
};
