import { vi } from "vitest";

export const mockImageShowStore = () => {
  vi.mock("@/store/imageShow", () => {
    return {
      useImageShow: () => {
        return {
          isVisible: true,
          data: {
            src: "/images/product/1347",
            alt: "1n4007",
          },
          show: vi.fn(),
          hide: vi.fn(),
        };
      },
    };
  });
};
