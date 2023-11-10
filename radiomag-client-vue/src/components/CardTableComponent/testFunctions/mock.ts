import { vi } from "vitest";

export const useMock = () => {
  vi.mock("@/utils/useAddGoodsToStorage", () => {
    return {
      useAddGoodsToStorage: vi.fn(),
    };
  });
};
