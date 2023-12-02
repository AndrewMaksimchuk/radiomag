import { vi } from "vitest";
import { managersResponseData } from "./getResponseData/managers";
import { shopsResponseData } from "./getResponseData/shops";

export const mockHTTPClient = () => {
  vi.mock("@/httpClient", () => {
    return {
      GET: {
        shops: async () => {
          return [null, shopsResponseData];
        },
        managers: async () => {
          return [null, managersResponseData];
        },
      },
      POST: {},
    };
  });
};
