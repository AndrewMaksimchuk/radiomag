#!/usr/bin/env sh

# grep -rw $1 `realpath ./radiomag-client-vue/src` | awk '{print "file://"$0}' | sed 's/://2'
grep -rnw $1 `realpath ./radiomag-client-vue/src`
