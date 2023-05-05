#!/usr/bin/node

import { exec } from "child_process";

const command = `npx tsc --target esnext ../endpoints/nodeEndpoints.ts`;

console.log("Compile...");
exec(command);
