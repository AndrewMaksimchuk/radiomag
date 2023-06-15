import { oneDay } from "./init.mjs";

const sevenDays = oneDay * 7;

export const getClosedIssuesLast7Days = (responseIssues) => {
  const closedIssuesLast7Days = responseIssues.data.filter(
    (issue) => Date.parse(issue.closed_at) > Date.now() - sevenDays
  );
  return `Closed issues in last 7 days: ${closedIssuesLast7Days.length}\n`;
};
