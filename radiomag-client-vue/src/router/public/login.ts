export default {
  path: "/login",
  name: "login" as const,
  component: () => {
    return import("@/views/LoginPage/LoginPage.vue");
  },
  meta: {
    title: "login",
  },
};
