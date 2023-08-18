#!/usr/bin/env sh

# project_dir=
component_dir=$(realpath ./radiomag-client-vue/src/components)
components=$(ls -1 $component_dir/*.vue)

echo "$components"

counter=$(echo "$components" | wc -l)
echo "You have $counter components without stories - storybook"
