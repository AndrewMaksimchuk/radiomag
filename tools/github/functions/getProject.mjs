import { octokit, projectId } from "./init.mjs";
import { throwError } from "./throwError.mjs";

const urlProjectGet = "GET /projects/{project_id}";

export const getProject = async (project_id = projectId) => {
  const response = await octokit.request(urlProjectGet, {
    project_id,
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  throwError(response);
  return response;
};
