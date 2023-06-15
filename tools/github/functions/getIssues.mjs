import { octokit, username, repository } from "./init.mjs";
import { throwError } from "./throwError.mjs";

const urlIssuesWithQuery = `GET /repos/{owner}/{repo}/issues{?state}`;

export const getIssues = async (state = "closed") => {
  const response = await octokit.request(urlIssuesWithQuery, {
    owner: username,
    repo: repository,
    state,
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  throwError(response);
  return response;
};
