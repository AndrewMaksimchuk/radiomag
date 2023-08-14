#!/usr/bin/env sh

clear
rm -f ../endpoints/nodeEndpoints.js
npx tsc --skipLibCheck --skipDefaultLibCheck --target esnext ../endpoints/nodeEndpoints.ts
node ../tools/printRoutes.js
