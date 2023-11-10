import puppeteer from "puppeteer";
import { urls } from "./metrics.urls.mjs";

const browser = await puppeteer.launch({ headless: "new" });

const job = async (url) => {
  const page = await browser.newPage();

  await page.goto(url);
  const metrics = await page.metrics();

  process.stdout.write(url);
  process.stdout.write("\n");
  process.stdout.write(JSON.stringify(metrics, null, 4));
  process.stdout.write("\n");
  process.stdout.write("\n");
};

const jobs = urls.map((url) => {
  return job(url);
});

await Promise.all(jobs);
await browser.close();
