import { getInput } from "./buildWrapper";

export const useAfterEach = async () => {
  await getInput().setValue("");
};
