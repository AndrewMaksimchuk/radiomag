SHELL=/bin/bash

client="./radiomag-client-vue"
server="./radiomag-server-express"

to_client=cd $(client)
to_server=cd $(server)

session_name="radiomag_app"
panel_client=0
panel_server=1

start: start_ide start_dev ## Run editor and developer dashboard

start_dev: ## Run developer dashboard with start project
	tmux new-session -d -s $(session_name)
	tmux split-window -h
	tmux send-keys -t $(panel_client) \
	"cd ./radiomag-client-vue && npm run dev" Enter
	tmux send-keys -t $(panel_server) \
	"cd ./radiomag-server-express && npm run dev" Enter
	tmux select-pane -t $(panel_client)
	tmux attach-session -t $(session_name)

start_ide: ## Run editor (VSCode)
	code

start_browser: ## Run chromium (fullscreen + devtools)
	chromium \
	--auto-open-devtools-for-tabs \
	--start-fullscreen \
	http://localhost:5173/ > /dev/null \
	2>&1 &

install: init_dev_env hooks init_database ## Init project first time

check_package: ## Check version of npm packages
	npm outdated

start_client: ## Run developer client
	$(to_client) && npm run dev

start_server: ## Run developer server
	$(to_server) && npm run dev

update_interactive: ## Update packages interactive
	npx npm-check-updates && npx npm-check-updates -i

hooks: ## Add project git hooks
	cp ./.hooks/* ./.git/hooks && \
	chmod +x ./.git/hooks/commit-msg && \
	chmod +x ./.git/hooks/pre-commit && \
	chmod +x ./.git/hooks/pre-push

tests_server: ## Run server tests
	cd $(server) && npm run tests

tests_client: ## Run client tests
	cd $(client) && npm run test:run

tests: tests_server tests_client ## Run all tests

test_client_create: ## Create new client test file
	node ./tools/test_client_create.mjs

build_client: ## Build client
	cd $(client) && npm run build

build: build_client ## Build project

git_clear: ## Delete unmerged branches
	git branch | grep -v -e "dev" -e "main" | xargs git branch -d

git_config: ## Add git config for this project
	git config --add include.path '../gitconfig'

init_dev_env: ## Install npm packages
	npm i

diagram: ## Create diagram of files dependencies
	npm run diagram

find_comments: ## Find all comments
	egrep -e '^(\/\/|\/\*((.|\n|\r)*)\*\/)' -r -I -n \
	--exclude-dir=node_modules \
	--exclude=*.d.ts \
	--exclude=*config* .

find_console: ## Find "console."
	grep -e "console\." -r -n \
	--exclude-dir=node_modules \
	--exclude-dir=dist .

init_database: ## Setup database
	cd $(server) && npm run migrate && npm run seeds

clear: ## Delete files
	rm db.sqlite

list_of_commands: ## Show list of commands
	@echo "List of commands: "
	@grep -e "^\w*:" ./Makefile | \
	sort | \
	cut -d ":" -f 1 | \
	awk '{print "make", $$0}' | \
	nl -s"  " -w2

run_command: ## Run "Makefile" command
	@./tools/run_command

help: ## Show available commands
	@echo "Available 'make' commands:"
	@egrep -h '\s##\s' ./Makefile | \
	sort | \
	awk 'BEGIN {FS = ":.*?## "}; \
	{printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
