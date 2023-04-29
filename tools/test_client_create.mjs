#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

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
