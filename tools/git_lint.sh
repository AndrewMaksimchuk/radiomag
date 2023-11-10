# !/bin/sh

FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')
[ -z "$FILES" ] && exit 0

# ESLint
ESLINTFILES=$(echo "$FILES" | grep -E '(.js|.ts|.vue)$')
if [ ! -z "$ESLINTFILES" ]; then
    echo "[ RUNNING: Eslint ]"
    ESLINT=$(echo "$ESLINTFILES" | xargs ./node_modules/.bin/eslint)
    if [ ! -z "$ESLINT" ]; then
        echo "$ESLINT"
        exit 1
    fi
fi

# Stylelint
STLINTFILES=$(echo "$FILES" | grep -E '(.css|.scss|.vue)$')
if [ ! -z "$STLINTFILES" ]; then
	echo "[ RUNNING: Stylelint ]"
    STYLELINT=$(echo "$STLINTFILES" | xargs ./node_modules/.bin/stylelint)
    if [ ! -z "$STYLELINT" ]; then
        echo "$STYLELINT"
        exit 1
    fi
fi

exit 0
