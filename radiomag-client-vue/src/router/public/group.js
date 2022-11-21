export default {
  path: "/group/:id",
  name: "group",
  component: () => import("@/views/Group.vue"),
  props: true,
  meta: {
    title: "Група",
    breadcrumbs: {
      name: "Група",
    },
  },
};

