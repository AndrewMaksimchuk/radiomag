import { readdirSync } from "fs";
import { join } from "path";
import { build } from "esbuild";

const PATH = "./src/public/";
const FILES = readdirSync(PATH)
  .filter((files) => !files.endsWith(".d.ts"))
  .map((files) => join(PATH, files));

build({
  entryPoints: FILES,
  outdir: "./public/js",
  minify: true,
}).catch(() => process.exit(1));
