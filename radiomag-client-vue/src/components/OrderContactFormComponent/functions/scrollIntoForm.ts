export const scrollIntoForm = () => {
  document.getElementById("orderContactsForm")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
