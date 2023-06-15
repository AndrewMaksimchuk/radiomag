// List repositories for the authenticated user

import { octokit } from "./init.mjs";
import { throwError } from "./throwError.mjs";

export async function getRepositoriesAuth() {
  const urlRepositoryGet = "GET /user/repos{?per_page}";
  const response = await octokit.request(urlRepositoryGet, {
    per_page: 75,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  throwError(response);
  return response;
}
