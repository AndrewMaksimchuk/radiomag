export const HTTPget = {
  contacts: "/api/contacts",
  catalog: "/api/catalog",
  slider: "/api/slider",

  catalogGroups: (id: number | string) => {
    return `/api/catalog/${id}`;
  },
  group: (id: number | string) => {
    return `/api/group/${id}`;
  },
  groupName: (id: number | string) => {
    return `/api/groupName/${id}`;
  },
  search: (name: string) => {
    return `/api/search/${name}`;
  },
};

export const HTTPpost = {
  order: "/api/order",
  error: "/api/error",
  ping: "/api/ping",
  bulletin: "/api/bulletin",
};
