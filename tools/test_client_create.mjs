#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";
import { exec } from "node:child_process";

const cwd = process.cwd();

const rl = readline.createInterface({ input, output });

const pathToTemplate = join(cwd, "tools", "templates", "testClient.test.ts");

const pathToClientTests = join(cwd, "radiomag-client-vue", "tests");

const userInput = await rl.question("What create? ");

const file = join(pathToClientTests, userInput);

const templateContent = readFileSync(pathToTemplate, { encoding: "utf-8" });

writeFileSync(file, templateContent, { encoding: "utf-8" });

console.log("File has been created:");
console.log("file://" + file);

rl.close();

const getEditor = () => {
  const fileContent = readFileSync(join(cwd, ".env_dev"), {
    encoding: "utf-8",
  });
  if (Boolean(fileContent) === false) return;

  const rows = fileContent.trim().split("\n");
  const isFinded = rows.find((value) => value.includes("EDITOR"));
  if (isFinded === undefined) return;

  return isFinded.split("=").at(-1);
};

const runEditor = () => {
  const editor = getEditor();
  editor && exec(`${editor} ${file}`);
};

runEditor();
