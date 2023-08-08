import { octokit, username } from "./init.mjs";
import { throwError } from "./throwError.mjs";

const urlProjectsList = "GET /users/{username}/projects";

export const getProjects = async () => {
  const response = await octokit.request(urlProjectsList, {
    username,
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  throwError(response);
  return response;
};
