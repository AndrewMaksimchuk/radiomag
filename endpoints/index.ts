export const HTTPget = {
  contacts: "/api/contacts",
  catalog: "/api/catalog",
  slider: "/api/slider",

  catalogGroups: (id: number | string) => `/api/catalog/${id}`,
  group: (id: number | string) => `/api/group/${id}`,
  groupName: (id: number | string) => `/api/groupName/${id}`,
  search: (name: string) => `/api/search/${name}`,
};

export const HTTPpost = {
  order: "/api/order",
  error: "/api/error",
  ping: "/api/ping",
};
