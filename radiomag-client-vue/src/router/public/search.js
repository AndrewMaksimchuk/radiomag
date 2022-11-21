export default {
  path: "/search/:name",
  name: "search",
  component: () => import("@/views/Search.vue"),
  meta: {
    title: "Пошук",
  },
};
