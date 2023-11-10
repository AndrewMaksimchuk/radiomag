export default {
  path: "/:pathMatch(.*)*",
  name: "404" as const,
  component: () => {
    return import("@/views/HTTP404Page");
  },
  meta: {
    title: "error_404",
  },
};
