import { vi } from "vitest";

export const i18n = () => {
  vi.mock("@/store/i18n", () => {
    return {
      useI18nStore: () => {
        return {
          availableLocales: [],
          locale: {},
          setLocale: vi.fn(),
          t: vi.fn(),
        };
      },
    };
  });
};
