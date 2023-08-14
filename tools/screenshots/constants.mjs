import { join } from "node:path";

export const BASE_URL = "http://localhost:5173";
export const SCREENSHOTS_DIR_NAME = "screenshots";
export const SCREENSHOTS_DIR = join(process.cwd(), SCREENSHOTS_DIR_NAME);
