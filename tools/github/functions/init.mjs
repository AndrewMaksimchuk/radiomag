import { Octokit } from "@octokit/core";
import { usage } from "./usage.mjs";

const TOKEN = process.env.GITHUB_USER_TOKEN;
if (TOKEN === undefined) {
  process.stdout.write(
    "Github user token is undefined!\nPlease set to GITHUB_USER_TOKEN variable.\n"
  );
  usage();
  process.exit(1);
}

export const username = "AndrewMaksimchuk";
export const repository = "radiomag";
export const projectId = 2;
export const oneDay = 24 * 60 * 60 * 1000;

export const octokit = new Octokit({ auth: TOKEN });
