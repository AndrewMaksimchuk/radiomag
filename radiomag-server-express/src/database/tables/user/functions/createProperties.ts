import type { UserRegistration } from "../../../../../../dto/User.js";
import { randomUUID } from "node:crypto";
import { Role } from "../../../../../../dto/Role.js";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../../services/token/index.js";
import { createPassword } from "../../../../services/password/index.js";

export const createProperties = async (user: UserRegistration) => {
  const id = randomUUID();
  const password = createPassword(user.password);
  const role = Role.client;
  const token = await createAccessToken({
    phone: user.phone,
    name: user.name,
  });
  const tokenRefresh = await createRefreshToken();

  return {
    id,
    password,
    role,
    token,
    tokenRefresh,
  };
};
