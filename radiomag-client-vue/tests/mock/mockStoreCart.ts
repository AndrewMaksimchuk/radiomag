import { vi } from "vitest";

export const mockStoreCart = () => {
  vi.mock("@/store/cart", () => {
    return {
      useCart: () => {
        return {
          cart: [],
          length: 0,
          add: vi.fn(),
          remove: vi.fn(),
          changeQuantity: vi.fn(),
          loadLocalStorage: vi.fn(),
          clear: vi.fn(),
          totalCost: "0",
        };
      },
    };
  });
};
