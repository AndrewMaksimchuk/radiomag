export const endpoints = {
  contacts: "/api/contacts",
  catalog: "/api/catalog",
  slider: "/api/slider",
  order: "/api/order",
  error: "/api/error",
  ping: "/api/ping",

  catalogGroups: "/api/catalog/:id",
  group: "/api/group/:id",
  groupName: "/api/groupName/:id",
  search: "/api/search/:name",
} as const;

export type Endpoints = typeof endpoints;
