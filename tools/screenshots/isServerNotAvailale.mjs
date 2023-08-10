import { BASE_URL } from "./constants.mjs";

class ErrorServerNotAvailable extends Error {
  constructor() {
    super();
    this.name = "Server error";
    this.message = "Not available";
    this.stack = undefined;
  }
}

export const isServerNotAvailable = async () => {
  try {
    await fetch(BASE_URL);
  } catch {
    throw new ErrorServerNotAvailable();
  }
};
