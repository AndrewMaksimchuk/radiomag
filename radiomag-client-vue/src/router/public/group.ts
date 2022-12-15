export default {
  path: "/group/:id",
  name: "group",
  component: () => import("@/views/GroupPage.vue"),
  props: true,
  meta: {
    title: "Група",
    breadcrumbs: {
      name: "Група",
    },
  },
};
