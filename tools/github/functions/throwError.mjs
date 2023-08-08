import { writeData } from "./write.mjs";

export const throwError = (response) => {
  writeData(response);
  if (response.status !== 200) {
    process.stdout.write("Fail request!\nCheck .data file.\n");
    process.exit(1);
  }
};
