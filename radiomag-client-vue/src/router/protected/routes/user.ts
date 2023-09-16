export default {
  path: "/user",
  name: "user" as const,
  component: () => {
    return import("@/views/UserPage/UserPage.vue");
  },
  meta: {
    title: "user",
  },
};
