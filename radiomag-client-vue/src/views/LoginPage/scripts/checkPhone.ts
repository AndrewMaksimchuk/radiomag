import { isLetterInclude } from "./isLetterInclude";

export const checkPhone = (
  _rule: unknown,
  value: string,
  callback: (error?: string | Error) => void
) => {
  if (isLetterInclude(value)) {
    return callback(new Error("Put only numbers"));
  }
  callback();
};
