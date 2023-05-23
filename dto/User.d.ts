import type { RoleName } from "./Role";
import { Role } from "./Role";

export type UserUniqueId = string;

export interface User {
  id: UserUniqueId;
  role: Role;
  status: RoleName;
  name: string;
  password: string;
  phoneNumber: number;
  email?: string;
  secondName?: string;
}

export type UserRegistration = Pick<User, "phoneNumber" | "password" | "name">;

export type UserAuthorization = Pick<User, "phoneNumber" | "password">;

export type UserUnauthorized = Pick<User, "id" | "role" | "status">;

export type UserClientData = Omit<User, "password">;
