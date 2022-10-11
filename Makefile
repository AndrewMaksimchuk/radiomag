default:
	cat Makefile

install: install_server install_client

client="./radiomag-client-vue"
server="./radiomag-server-express"

to_client=cd $(client)
to_server=cd $(server)

install_client:
	$(to_client) && npm i

install_server:
	$(to_server) && npm i

check_package_client:
	cd $(client) && npm outdated

check_package_server:
	cd $(server) && npm outdated

start_client:
	$(to_client) && npm run serve

start_server:
	$(to_server) && npm run dev

update_clien_interactive:
	$(to_client) && npx npm-check-updates && npx npm-check-updates -i

update_server_interactive:
	$(to_server) && npx npm-check-updates && npx npm-check-updates -i

