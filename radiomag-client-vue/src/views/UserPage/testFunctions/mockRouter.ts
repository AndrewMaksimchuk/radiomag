import { vi } from "vitest";

vi.mock("vue-router", () => {
  return {
    useRouter: vi.fn().mockReturnValue({
      push: vi.fn(),
    }),
    useRoute: vi.fn().mockReturnValue({
      query: {},
    }),
  };
});
