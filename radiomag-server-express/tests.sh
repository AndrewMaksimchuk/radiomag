#!/usr/bin/env sh

npm exec bun ./src/app.ts &
sleep 1
npm exec bun test
killall bun
