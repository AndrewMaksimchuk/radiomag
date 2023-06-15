import { octokit, username, repository } from "./init.mjs";
import { throwError } from "./throwError.mjs";

export async function getListRepositoryLangueges() {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/languages",
    {
      owner: username,
      repo: repository,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  throwError(response);
  return response;
}
