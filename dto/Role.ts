export const enum Role {
  "admin",
  "manager",
  "client",
  "guest",
}

export type RoleName = keyof typeof Role;

export type RoleValues = typeof Role[keyof typeof Role];
