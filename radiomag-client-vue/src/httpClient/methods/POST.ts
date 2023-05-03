export const POST = async <ResponseData>(
  input: RequestInfo | URL,
  inputData: unknown,
  init?: RequestInit
): Promise<ResponseData | undefined> => {
  try {
    const response = await fetch(input, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
      ...init,
    });
    return await response.json();
  } catch (error) {
    return undefined;
  }
};

export default POST;
