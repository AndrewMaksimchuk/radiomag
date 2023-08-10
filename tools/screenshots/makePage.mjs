import { join } from "node:path";
import { SCREENSHOTS_DIR } from "./constants.mjs";
import { delay } from "../utils/delay.mjs";

const setViewportOptions = (device) => {
  return "desktop" === device
    ? { width: 1920, height: 768, isMobile: false }
    : { width: 320, height: 768, isMobile: true };
};

const makeScreenshotOptionsSetPath = (device, name) => {
  return "desktop" === device
    ? join(SCREENSHOTS_DIR, name + ".png")
    : join(SCREENSHOTS_DIR, name + ".mobile" + ".png");
};

const setScreenshotOptions = (device, name) => {
  return {
    fullPage: true,
    path: makeScreenshotOptionsSetPath(device, name),
    type: "png",
  };
};

const checkDevice = (device) => {
  const devices = ["desktop", "mobile"];
  if (false === devices.includes(device)) {
    throw new Error('"device" parameter must be "desktop" or "mobile"');
  }
};

export const makePage = (device) => {
  checkDevice(device);
  return async (browser, name, data) => {
    const page = await browser.newPage();
    await page.setViewport(setViewportOptions(device));
    await page.goto(data.url);
    data.selector && (await page.waitForSelector(data.selector));
    await delay();
    await page.screenshot(setScreenshotOptions(device, name));
  };
};
