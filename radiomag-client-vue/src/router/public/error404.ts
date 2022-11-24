export default {
  path: "/:pathMatch(.*)*",
  name: "404",
  component: () => import("@/views/Error404.vue"),
  meta: {
    title: "Сталася помилка",
  },
};
