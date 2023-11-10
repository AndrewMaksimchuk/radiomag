#!/usr/bin/node

import { getFiles } from "./files.js";
import { main } from "./main.js";

main(getFiles(process.cwd()));
