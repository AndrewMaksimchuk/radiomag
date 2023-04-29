export default async (
  input: RequestInfo | URL,
  data: unknown,
  init?: RequestInit
) => {
  return await fetch(input, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    ...init,
  });
};
