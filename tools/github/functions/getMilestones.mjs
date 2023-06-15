const complete = (open, closed) => {
  const sum = open + closed;
  return Math.floor((closed / sum) * 100);
};

const createGraph = (complete) => {
  const scale = 3;
  const completeScaled = complete / scale;
  const compGraph = "\u2588".repeat(completeScaled);
  const emptyGraph = "\u2591".repeat(100 / scale - completeScaled);
  return `${compGraph}${emptyGraph}`;
};

const createText = ({ title, open_issues, closed_issues }, maxTitleLength) => {
  const completeNumber = complete(open_issues, closed_issues);
  const graph = createGraph(completeNumber);
  const text =
    `${title.padEnd(maxTitleLength)} ${graph}\n` +
    `${completeNumber
      .toString()
      .padStart(
        maxTitleLength + 3
      )}% complete  ${open_issues} open  ${closed_issues} closed`;
  return text;
};

const getTitleMaxLength = (milestones) => {
  return Math.max(...milestones.data.map((mile) => mile.title.length));
};

export const getMilestones = (milestones) => {
  /*
  title ========---------------- graph
        66% complete 19 open 38 closed
  */
  const maxTitleLength = getTitleMaxLength(milestones);
  const header = "Milestones\n";
  const text = milestones.data
    .map((milestone) => createText(milestone, maxTitleLength))
    .join("\n");
  return header + text;
};
