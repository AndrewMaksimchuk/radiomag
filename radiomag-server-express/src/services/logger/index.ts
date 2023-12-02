import type { Request, Response, NextFunction } from "express";

const KEYS = ["url", "headers", "cookies", "query", "params", "body"] as const;

const LENGTH_MAX = Math.max(
  ...KEYS.map((key) => {
    return key.length;
  })
);

const colorize = (text: string) => {
  return `\x1b[42m\x1b[30m${text}\x1b[49m\x1b[39m`;
};

const formatHeader = (text: string) => {
  return "[ " + text.toUpperCase().padEnd(LENGTH_MAX) + " ]";
};

const printHeader = (text: string) => {
  process.stdout.write(colorize(formatHeader(text)) + "\n");
};

const printData = (text: string) => {
  process.stdout.write(text + "\n");
};

const printFooter = () => {
  process.stdout.write("-".repeat(process.stdout.columns));
  process.stdout.write("\n");
};

const printRequestSection = (headerText: string, dataText: string) => {
  printHeader(headerText);
  printData(dataText);
};

const printKeyData = (req: Request) => {
  printHeader(new Date().toLocaleTimeString() + " " + req.url);
  KEYS.forEach((key) => {
    printRequestSection(key, JSON.stringify(req[key], null, 2));
  });
  printFooter();
};

export const useLogger = (req: Request, _res: Response, next: NextFunction) => {
  if ("development" === process.env.NODE_ENV) {
    printKeyData(req);
  }
  next();
};
