# radiomag - online-shop of electronics components [![radiomag](https://github.com/AndrewMaksimchuk/radiomag/actions/workflows/radiomag.yml/badge.svg)](https://github.com/AndrewMaksimchuk/radiomag/actions/workflows/radiomag.yml)

Online shop build on Vue.js  
This repositories contain two folder, one is client app  
(radiomag-client-vue) and second(radiomag-server-express) is only proxy  
server for get real products for group of electronics components.

Client app built on Vue.js 3 and Typescript, Vue-router, Pinia, SCSS,  
BEM, localStorage, Web Worker.

The following functionality is implemented:

- Main page
- Group page
- Cart page
- Contacts page
- Model window
- User page
- Dynamic bread crumbs
- Background Web Worker in group page for work with data from server
  and no blocking page
- Save data in localStorage of products in cart when user close page
  and not make the order and restore data when user open shop page again
  ![](index.png)
- Color schemes

### [Screenshots](screenshots.md)

## Developer

Makefile containe all commands for development.  
For run application you need first run server and then run client.

Run in terminal `dashboard` script for get description about available  
`make` commands and project state, tasks.  
But before use that script you need setup environment variable  
`GITHUB_USER_TOKEN` with value from [github.com](https://github.com/)  
from "Personal access tokens".

Git commit style: "Title: Start message."  
Git commit titles:

- "Added"
- "Changed"
- "Fixed"
- "Removed"
- "Deprecated"
- "Security"
- "Performance"
- "Other"
- "Release"

If need skip tests run when push local branch to remote server,  
add `GIT_TESTS=false` before `git push`:

```sh
GIT_TESTS=false git push -u origin <branch-name>
```

You can set custom host(url) for client(browser).  
Write ip and hostname in `/etc/hosts` with `sudo`.  
After that set environment variable `RADIOMAG_HOST`  
to yout new url.

```/ets/hosts
127.0.0.1   localhost
127.1.1.1   radiomag
```

Also you can set browser that open url.  
Write environment variable `RADIOMAG_BROWSER`  
to your favorite developer browser name.  
y default use `chromium`.

```sh
RADIOMAG_BROWSER=firefox
```

For server, you can see response of api by use  
`radiomag-server-express/tests/curl.bash`

## Require

Server:

- SQLite3
- Redis(need install before)
