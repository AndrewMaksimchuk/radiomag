import { oneDay } from "./init.mjs";

export const getClosedIssuesPreviousDays = (responseIssues) => {
  const closedIssuesPreviousDays = responseIssues.data.filter(
    (issue) => Date.parse(issue.closed_at) > Date.now() - oneDay
  );
  return `Closed issues in previous day: ${closedIssuesPreviousDays.length}\n`;
};
