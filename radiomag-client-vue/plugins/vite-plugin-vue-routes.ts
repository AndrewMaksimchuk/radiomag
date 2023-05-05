import type { Plugin, ServerHook } from "vite";
import { readdir, readFile } from "fs/promises";
import { join } from "path";

const cwd = process.cwd();
const routePathsPublic = join(cwd, "src/router/public");

const getFiles = async (path: string) => {
  const files = (await readdir(path)).filter(
    (filename) => !filename.includes("index")
  );
  return files.map((filename) => join(routePathsPublic, filename));
};

const getContent = async (path: string) => {
  return (await readFile(path))
    .toString()
    .split("\n")
    .find((row) => row.includes("path"));
};

const getContents = (paths: string[]) => {
  return Promise.all(paths.map((value) => getContent(value)));
};

const toString = (route: string | undefined, path: string) => {
  return `${route?.trim()}\nfile://${path.trim()}`;
};

const collect = async () => {
  const filesPublic = await getFiles(routePathsPublic);
  const contents = await getContents(filesPublic);
  return filesPublic.map((filepath, index) =>
    toString(contents[index], filepath)
  );
};

const printed = async () => {
  const result = await collect();
  console.log("\nAvailable routes:\n".toUpperCase());
  result.forEach((value) => console.log(value + "\n"));
};

const handler: ServerHook = () => {
  setTimeout(printed, 3000);
};

export const vitePluginVueRoutes = (): Plugin => {
  return {
    name: "vite-plugin-vue-routes",
    enforce: "post",
    apply: "serve",
    configureServer: {
      order: "post",
      handler,
    },
  };
};

export default vitePluginVueRoutes;
