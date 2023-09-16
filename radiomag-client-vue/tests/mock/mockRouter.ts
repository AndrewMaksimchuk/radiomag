import { vi } from "vitest";

export const mockRouter = () => {
  vi.mock("vue-router", () => {
    return {
      useRouter: vi.fn(),
      useRoute: vi.fn(),
    };
  });
};
