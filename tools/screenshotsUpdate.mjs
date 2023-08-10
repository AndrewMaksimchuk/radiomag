#!/usr/bin/env node

import { join } from "node:path";
import { readdirSync, writeFileSync } from "node:fs";
import {
  SCREENSHOTS_DIR_NAME,
  SCREENSHOTS_DIR,
} from "./screenshots/constants.mjs";
import { createScreenshots } from "./createScreenshots.mjs";

const DOCUMENTATION_FILE_NAME = "screenshots.md";
const DOCUMENTATION_PATH = join(process.cwd(), DOCUMENTATION_FILE_NAME);

const createImageMD = (pathToImage) => {
  return `![](${pathToImage})`;
};

const sortOrder = (a, b) => {
  const abool = a.includes(".mobile");
  const bbool = b.includes(".mobile");

  if (true === abool && false === bbool) {
    return -1;
  }

  if (true === bbool && false === abool) {
    return 1;
  }

  return 0;
};

const screenshotsUpdate = async () => {
  try {
    await createScreenshots();
  } catch (error) {
    process.stdout.write(error + "\n");
    process.exit(1);
  }

  const images = readdirSync(SCREENSHOTS_DIR).map((imageName) => {
    return join(SCREENSHOTS_DIR_NAME, imageName);
  });

  const mdImages = images
    .map((imagePath) => {
      return createImageMD(imagePath);
    })
    .sort(sortOrder)
    .reverse()
    .join("\n");
  writeFileSync(DOCUMENTATION_PATH, mdImages, { encoding: "utf-8" });
  process.exit(0);
};

screenshotsUpdate();
