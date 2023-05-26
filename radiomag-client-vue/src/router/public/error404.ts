export default {
  path: "/:pathMatch(.*)*",
  name: "404",
  component: () => import("@/views/Error404Page.vue"),
  meta: {
    title: "error_404",
  },
};
