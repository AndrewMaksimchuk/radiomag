#!/usr/bin/env sh

rm -rf ../endpoints/nodeEndpoints.js
npm run start &
npm exec jest
killall node
