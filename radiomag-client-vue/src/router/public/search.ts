export default {
  path: "/search/:name",
  name: "search" as const,
  component: () => {
    return import("@/views/SearchPage.vue");
  },
  meta: {
    title: "search",
  },
};
