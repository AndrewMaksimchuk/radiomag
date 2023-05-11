export const enum Role {
  "admin",
  "manager",
  "client",
  "guest",
}

export type UserUniqueId = string;

export interface User {
  id: UserUniqueId;
  role: Role;
  name: string;
  password: string;
  phoneNumber: number;
  email?: string;
  secondName?: string;
}

export type UserRegistration = Pick<User, "phoneNumber" | "password" | "name">;

export type UserAuthorization = Pick<User, "phoneNumber" | "password">;

export type UserClientData = Omit<User, "password">;
