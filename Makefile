client="./radiomag-client-vue"
server="./radiomag-server-express"

to_client=cd $(client)
to_server=cd $(server)

session_name="radiomag_app"
panel_client=0
panel_server=1

start: start_ide start_browser start_tmux

start_tmux:
	tmux new-session -d -s $(session_name)
	tmux split-window -h
	tmux send-keys -t $(panel_client) "cd ./radiomag-client-vue && npm run dev" Enter
	tmux send-keys -t $(panel_server) "cd ./radiomag-server-express && npm run dev" Enter
	tmux select-pane -t $(panel_client)
	tmux attach-session -t $(session_name)

start_ide:
	code

start_browser:
	chromium --auto-open-devtools-for-tabs --start-fullscreen http://localhost:5173/ > /dev/null 2>&1 &

install: install_server install_client hooks

install_client:
	$(to_client) && npm i

install_server:
	$(to_server) && npm i

check_package_client:
	cd $(client) && npm outdated

check_package_server:
	cd $(server) && npm outdated

start_client:
	$(to_client) && npm run dev

start_server:
	$(to_server) && npm run dev

update_clien_interactive:
	$(to_client) && npx npm-check-updates && npx npm-check-updates -i

update_server_interactive:
	$(to_server) && npx npm-check-updates && npx npm-check-updates -i

hooks:
	cp ./.hooks/* ./.git/hooks && chmod +x ./.git/hooks/commit-msg && chmod +x ./.git/hooks/pre-commit && chmod +x ./.git/hooks/pre-push

tests_server:
	cd $(server) && npm run tests

tests_client:
	cd $(client) && npm run test:unit

tests: tests_server tests_client

git_clear:
	git branch | grep -v -e "dev" -e "main" | xargs git branch -d
