import { scryptSync } from "node:crypto";

export const createPassword = (password: string) => {
  return scryptSync(password, "salt", 32).toString("hex");
};

export const verifyPassword = (passFromUser: string, passFromDb: string) => {
  return createPassword(passFromUser) === passFromDb;
};
