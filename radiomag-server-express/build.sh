#!/usr/bin/env sh

tmp_dir='.tmp/'
sourc_dir='dist/'

rm -rfd $sourc_dir
tsc -p . --outDir $tmp_dir
node ./esbuild.config.mjs
rm -rfd $tmp_dir
