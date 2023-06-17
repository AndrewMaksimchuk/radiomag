#!/usr/bin/env node

import { execSync } from "node:child_process";
import { appendFileSync } from "node:fs";
import { join } from "node:path";

const filename = "CHANGELOG.md";

const createCommitLink = (hash) => {
  const commitLink = `https://github.com/AndrewMaksimchuk/radiomag/commit/${hash}`;
  return `[#${hash}](${commitLink})`;
};

const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDay().toString().padStart(2, "0");
  return `### ${year}-${month}-${day}\n\n`;
};

const commitToMd = (stdout) => {
  if (stdout.length === 0) process.exit(0);
  return stdout
    .trim()
    .split("\n")
    .map((row) => {
      const [hash, ...words] = row.split(" ");
      return `${createCommitLink(hash)} ${words.join(" ")}`;
    })
    .join("  \n");
};

const getCommits = () => {
  return execSync("git log --oneline origin/main..HEAD").toString();
};

const putEmptyLine = () => {
  return "\n";
};

const append = (text) => {
  appendFileSync(join(process.cwd(), filename), text);
};

const main = () => {
  append(getDate());
  append(commitToMd(getCommits()));
  append(putEmptyLine() + putEmptyLine());
};

main();
