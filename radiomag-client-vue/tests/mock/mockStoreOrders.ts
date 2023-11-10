import { vi } from "vitest";

export const mockOrdersStore = () => {
  vi.mock("@/store/orders", () => {
    return {
      useOrders: () => {
        return {
          orders: [],
          isLoading: false,
          getOrders: vi.fn(),
        };
      },
    };
  });
};
