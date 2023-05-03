export const validateComponents = () => {
  vi.mock("@/utils/validateComponents", () => {
    return {
      validateComponents: () => vi.fn(),
    };
  });
};
