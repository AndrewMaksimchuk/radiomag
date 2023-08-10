#!/usr/bin/env node

import puppeteer from "puppeteer";
import { animationStart, animationStop } from "./utils/animations.mjs";
import { BASE_URL } from "./screenshots/constants.mjs";
import { makePage } from "./screenshots/makePage.mjs";
import { isServerNotAvailable } from "./screenshots/isServerNotAvailale.mjs";

const createURL = (url, selector) => {
  return { url: BASE_URL + url, selector };
};

const URLS = {
  index: createURL("", ".content"),
  group: createURL("/group/311", "article.card-line:nth-child(1)"),
  cart: createURL("/cart", undefined),
  contacts: createURL("/contacts", "section.contacts-section:nth-child(1)"),
};

const desktopPage = makePage("desktop");
const mobilePage = makePage("mobile");

export const createScreenshots = async () => {
  await isServerNotAvailable();
  const intervalId = animationStart();
  const browser = await puppeteer.launch({ headless: "new" });
  const jobs = Object.entries(URLS)
    .map(([name, data]) => {
      return [
        desktopPage(browser, name, data),
        mobilePage(browser, name, data),
      ];
    })
    .flat();
  await Promise.all(jobs);
  animationStop(intervalId);
  await browser.close();
};

if (process.argv[1] === import.meta.url.slice(7)) {
  createScreenshots();
}
