## Getting Started

> yarn install && yarn start

See [Build Scripts](#build-scripts) for options.

---

### Where :: Code

| Directory      | Description                       |
| -------------- | --------------------------------- |
| src/`service`  | Our service which utilizes Prisma |
| src/`database` | Mongodb                           |

### Where :: Servers

| Purpose           | URI   | Port |
| ----------------- | ----- | ---- |
| Prisma Service    | local | 4000 |
| Prisma ORM Engine | local | 4466 |
| Database          | local | 3306 |

---

### Build Scripts

##### Terminal Scripts

> These are scripts which are intended to be run from your terminal

- `start`

  > Build docker-compose.all.yml (ie. production version).

  [Jump to Start Options](#start-options) for more info on what `start` does

- `dev`

  > Build docker-compose.db.yml (ie. development version).

  [Jump to Start Options](#start-options) for more info on what `dev` does

- `build`

  > This is the default entry point for rebuilding. By default, it's set to "docker:rebuild:all" because start is set to "start:docker:all". Build and start should match. ...is there a cleaner way to do this? 🤔

  [Jump to Build Options](#build-options)

- `clean`

  > This removes all containers' with "prisma" in its name (ie. all prisma_starter containers are destroyed).

- `test`

  > This runs docker-compose all & runs ava in --watch mode. Useful when you want to update your tests, but useful when you want to update your tests. Unfortunately, no docker HMR right now so updating source won't work as expected.

##### Start Options

> Start Options are called by [start -- Terminal Scripts](#terminal-scripts)

- `start:docker:db`

  > This runs Prisma Engine (:4466) and MySQL (:3306) in docker. Meanwhile, it runs your service locally. Use this option for local development.

- `start:docker:all`

  > This runs Prisma Engine (:4466), MySQL (:3306) and your Node service (:4000) in Docker containers

  [Jump back to Terminal Scripts](#terminal-scripts)

##### Build Options

> Build Options are called by [build -- Terminal Scripts](#terminal-scripts)

>

- `docker:rebuild:db`

  > This rebuilds database/docker-compose.db.yml.

- `docker:rebuild:all`

  > This rebuilds docker-compose.all.yml

---

### localhost:4466 vs prisma:4466

You'll notice in [.env](./.env) that process.env.PRISMA_ENDPOINT is set to `http://localhost:4466`. However, in [index.js](./src/service/index.js) the Prisma server is initialized with `http://prisma:4466`

This is necessary when using docker-compose to containerize our prisma service (ie. src/service/...) along with the prisma engine (ORM layer which translates between prisma queries and mysql) & mysql database (persistent storage).

Why?
Short answer is because I'm not using Linux (I use Mac). The type of network you need to map Docker's localhost to your host's (ie. your laptop's) localhost is only available on Linux. I did find a [3rd party solution](https://github.com/mal/docker-for-mac-host-bridge) but decided to not go that route.

> In case you're wondering, the demo below was captured after running `npm run start:docker:db`.
> However, from the browser, this is functionally identical to running `npm run start:docker:all`
