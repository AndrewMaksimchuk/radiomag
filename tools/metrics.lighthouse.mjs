import { join } from "path";
import { writeFileSync, mkdirSync, rmSync } from "fs";
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { urls } from "./metrics.urls.mjs";
import { animationStart, animationStop } from "./utils/animations.mjs";

const pathDir = join(process.cwd(), ".metrics_lighthouse");
rmSync(pathDir, {
  recursive: true,
  force: true,
});
mkdirSync(pathDir);

const runTest = async (url) => {
  const chrome = await launch({ chromeFlags: ["--headless"] });
  const runnerResult = await lighthouse(url, {
    output: "html",
    port: chrome.port,
    screenEmulation: {
      width: 1441,
      height: 3200,
      mobile: false,
    },
    formFactor: "desktop",
  });
  const reportHtml = runnerResult?.report || "";
  const saveTo = join(pathDir, url.replaceAll("/", "_") + ".report.html");
  writeFileSync(saveTo, reportHtml.toString());
  await chrome.kill();
  process.stdout.write(url + "\n");
};

const id = animationStart();
for (const url of urls) {
  await runTest(url);
}
animationStop(id);
