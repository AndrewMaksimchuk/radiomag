export default {
  path: "/search/:name",
  name: "search",
  component: () => import("@/views/SearchPage.vue"),
  meta: {
    title: "Пошук",
  },
};
