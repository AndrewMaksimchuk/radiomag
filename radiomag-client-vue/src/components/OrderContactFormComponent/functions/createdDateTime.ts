export const createdDateTime = () => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Kiev",
    hour12: false,
  })
    .format(Date.now())
    .replaceAll("/", "-")
    .replace(",", "");
};
