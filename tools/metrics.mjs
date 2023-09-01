import puppeteer from "puppeteer";

const BASE_URL = "http://localhost:5173";
const browser = await puppeteer.launch({ headless: "new" });

const urls = [
  "/",
  "/group/479",
  "/products",
  "/search/attiny13",
  "/contacts",
  "/cart",
  "/this_path_not_exist_404",
];

const job = async (url) => {
  const page = await browser.newPage();

  const pageUrl = BASE_URL + url;
  await page.goto(pageUrl);
  const metrics = await page.metrics();

  process.stdout.write(pageUrl);
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
