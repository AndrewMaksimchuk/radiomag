import type { RoleValues } from "./Role";

export type UserUniqueId = string;

export interface User {
  id: UserUniqueId;
  role: RoleValues;
  name: string;
  password: string;
  phone: string;
  token: string;
  tokenRefresh: string;
  email?: string | null;
  secondName?: string | null;
}

export type UserRegistration = Pick<User, "phone" | "password" | "name">;

export type UserAuthorization = Pick<User, "phone" | "password">;

export type UserUnauthorized = Pick<User, "role">;

export type UserClientData = Omit<User, "password">;
