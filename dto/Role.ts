export const enum Role {
  "admin",
  "manager",
  "client",
  "guest",
}

export type RoleName = keyof typeof Role;
