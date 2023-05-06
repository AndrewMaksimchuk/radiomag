import { vi } from "vitest";

export const vueToastification = () => {
  vi.mock("vue-toastification", () => {
    return {
      useToast: vi.fn(),
    };
  });
};
