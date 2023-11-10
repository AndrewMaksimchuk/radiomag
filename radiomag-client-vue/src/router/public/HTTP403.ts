export default {
  path: "/403",
  name: "403" as const,
  component: () => {
    return import("@/views/HTTP403Page/HTTP403Page.vue");
  },
  meta: {
    title: "http_403",
  },
};
