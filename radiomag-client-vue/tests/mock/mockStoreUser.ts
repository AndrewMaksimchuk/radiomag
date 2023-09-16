import { vi } from "vitest";
import { Role } from "../../../dto/Role";
import { v4 } from "uuid";

export const user = {
  id: v4(),
  role: Role.guest,
  name: "TestUserName",
  phone: "+380671111111",
  email: "testuser@test.com",
  secondName: "",
  token: "",
  tokenRefresh: "",
};

export const mockUserStore = () => {
  vi.mock("@/store/user", () => {
    return {
      useUser: () => {
        return {
          user,
          set: vi.fn(),
          get: vi.fn(),
          updateProperty: vi.fn(),
          localStorage: user,
          clear: vi.fn(),
        };
      },
    };
  });
};
