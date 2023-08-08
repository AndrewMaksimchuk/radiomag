import { writeFile } from "fs/promises";

export function writeData(data) {
  writeFile(".data", JSON.stringify(data), { encoding: "utf-8" });
}
