import type { User } from "../../../../../dto/User";

type ReturnUser = keyof User;

export const returningUserColumns: readonly ReturnUser[] = [
  "id",
  "role",
  "name",
  "secondName",
  "phone",
  "email",
  "token",
  "tokenRefresh",
  "password",
];
