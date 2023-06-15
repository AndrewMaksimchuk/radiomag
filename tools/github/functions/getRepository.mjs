import { octokit, username, repository } from "./init.mjs";
import { throwError } from "./throwError.mjs";

export async function getRepository() {
  const urlRepositoryGet = "GET /repos/{owner}/{repo}";
  const response = await octokit.request(urlRepositoryGet, {
    owner: username,
    repo: repository,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  throwError(response);
  return response;
}
