import { resolve4 } from "node:dns";
import { exec } from "node:child_process";

const browserCommand = (url) => {
  const BROWSER = process.env["RADIOMAG_BROWSER"];

  if (undefined === BROWSER) {
    return `chromium --auto-open-devtools-for-tabs ${url} > /dev/null 2>&1 &`;
  }

  return `${BROWSER} ${url} > /dev/null 2>&1 &`;
};

const HOST = process.env["RADIOMAG_HOST"];

if (HOST) {
  resolve4(HOST, (_err, addresses) => {
    addresses && exec(browserCommand(`http://${HOST}:5173`));
  });
} else {
  exec(browserCommand("http://127.1.1.1:5173"));
}
