import type { RoleValues } from "$/dto/Role";
import { Role } from "@/../../dto/Role";

export const isGuest = (role: RoleValues) => {
  return Role.guest === role;
};
