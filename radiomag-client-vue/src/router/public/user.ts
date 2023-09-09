export default {
  path: "/user",
  name: "user",
  component: () => {
    return import("@/views/UserPage/UserPage.vue");
  },
  meta: {
    title: "user",
  },
};
