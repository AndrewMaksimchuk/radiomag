import { vi } from "vitest";

export const i18nValidators = () => {
  vi.mock("@/utils/i18n-validators", () => {
    return {
      required: vi.fn(),
      requiredIf: vi.fn(),
      email: vi.fn(),
      decimal: vi.fn(),
      minLength: vi.fn(),
      maxLength: vi.fn(),
      alpha: vi.fn(),
    };
  });
};
