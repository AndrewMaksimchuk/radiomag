#!/usr/bin/env node

import { join, basename } from "node:path";
import { writeFileSync } from "node:fs";
import { glob } from "glob";
import shelljs from "shelljs";

const DIAGRAMSFILE = "dependencies_diagram.md";
const clientPattern = "radiomag-client-vue/src/**/*.{js,ts,vue}";
const cwd = process.cwd();

const getFiles = async (pattern = "**/*.{js,ts,vue}") =>
  await glob(pattern, { ignore: "**/node_modules/**" });

const mapFrom = (row) => {
  const hasFrom = row.indexOf("from");
  const hasDynamicImport = row.indexOf("import(");

  if (hasFrom > 0) {
    return row
      .substring(hasFrom + 4)
      .replaceAll('"', "")
      .replaceAll("'", "")
      .replaceAll(";", "")
      .trim();
  }

  if (hasDynamicImport > 0) {
    const end = row.lastIndexOf(")");
    return row
      .substring(hasDynamicImport + 7, end)
      .replaceAll('"', "")
      .replaceAll("'", "")
      .trim();
  }

  // side effect import
  const start = "import".length;
  return row
    .substring(start)
    .replaceAll('"', "")
    .replaceAll("'", "")
    .replaceAll(";", "")
    .trim();
};

const buildImportsMap = (file) => {
  const name = basename(file);
  const path = join(cwd, file);
  const imports = shelljs
    .cat(path)
    .grep("import ")
    .stdout.split("\n")
    .filter(Boolean);
  const importsFrom = imports.map(mapFrom);
  return { name, path, imports, importsFrom };
};

const buildChain = (fileData) => {
  const { name, importsFrom } = fileData;
  return importsFrom.map(
    (importName) =>
      `${name}-->${
        basename(importName).includes("style") // "style" is keyword of mermaid
          ? basename(importName).replaceAll(".", "")
          : basename(importName)
      }("${importName}")`
  );
};

const toMarkdown = (content, header = "") =>
  `${header}\n` + "```mermaid\nflowchart LR\n" + `${content}\n` + "```";

// CLIENT
const client = async () => {
  const client = await (await getFiles(clientPattern)).sort();
  const clientImportsMap = client.map(buildImportsMap);
  const clientDiagram = clientImportsMap
    .map(buildChain)
    .filter((arr) => arr.length)
    .map((arr) => arr.join("\n"))
    .join("\n");
  writeFileSync(
    join(cwd, DIAGRAMSFILE),
    toMarkdown(clientDiagram, "## Client")
  );
};

client();
