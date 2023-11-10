import { readdirSync } from "fs";
import { join } from "path";

export const getFiles = (cwd) => {
  const path = join(cwd, "src", "routes");
  return readdirSync(path)
    .filter((value) => {
      return !value.includes("index");
    })
    .map((value) => {
      return join(path, value);
    })
    .map((value) => {
      return value.endsWith(".ts") ? value : join(value, "index.ts");
    });
};
