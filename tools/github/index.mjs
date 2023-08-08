/**
DASHBOARD
- [x] Repository/Project name
- [x] Repository description
- [x] Repository url:
- [x] Repository langueges
- [x] Open issues: 25
- [x] Closed issues in previous day: 1
- [x] Closed issues in last 7 days: 3
- [ ] Current task: issues from project (title, id, url)
- [x] Milestones
*/
import { putEmptyLine } from "./functions/putEmptyLine.mjs";
import { getRepository } from "./functions/getRepository.mjs";
import { getIssues } from "./functions/getIssues.mjs";
import { getClosedIssuesLast7Days } from "./functions/getClosedIssuesLast7Days.mjs";
import { getClosedIssuesPreviousDays } from "./functions/getClosedIssuesPreviousDays.mjs";
import { getRepositoryName } from "./functions/getRepositoryName.mjs";
import { getRepositoryDescription } from "./functions/getRepositoryDescription.mjs";
import { getRepositoryUrl } from "./functions/getRepositoryUrl.mjs";
import { getRepositoryOpenIssues } from "./functions/getRepositoryOpenIssues.mjs";
import { getListRepositoryLangueges } from "./functions/getListRepositoryLangueges.mjs";
import { getListLanguages } from "./functions/getListLanguages.mjs";
import { getListMlestones } from "./functions/getListMilestones.mjs";
import { getMilestones } from "./functions/getMilestones.mjs";

const repository = await getRepository();
const langs = await getListRepositoryLangueges();
process.stdout.write(getRepositoryName(repository.data));
process.stdout.write(getRepositoryDescription(repository.data));
process.stdout.write(getRepositoryUrl(repository.data));
process.stdout.write(getListLanguages(langs));
putEmptyLine();
putEmptyLine();

process.stdout.write(getRepositoryOpenIssues(repository.data));

const issues = await getIssues();
process.stdout.write(getClosedIssuesLast7Days(issues));
process.stdout.write(getClosedIssuesPreviousDays(issues));
putEmptyLine();
putEmptyLine();

const milestones = await getListMlestones();
process.stdout.write(getMilestones(milestones));
putEmptyLine();
