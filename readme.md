<p align="center">
  <img width="300" height="200" src="./banner.svg">
</p>

<p align="center">
  <a aria-label="Actions" href="https://github.com/natelindev/vlepo/actions">
    <img alt="Github actions" src="https://img.shields.io/github/workflow/status/natelindev/vlepo/deploy-prod?color=green&label=actions&logo=github&logoColor=green&style=for-the-badge">
  </a>
  <a aria-label="License" href="https://github.com/natelindev/vlepo/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/natelindev/vlepo?style=for-the-badge">
  </a>
</p>

## Deprecated

Please use [vlepo2](https://github.com/natelindev/vlepo2) instead

## Features

- Generate modern clean looking blog with ease.
- MDX powered, allowing for interactive content creation.
- Graphql API and OAuth2.0 Model for permission control
- Image upload, auto optimize
- Out-of-the-box light and dark theme support

## Generate a MDX powered blog in 5 minutes

Data has shown that 99% of use cases for all developer tooling are building unnecessarily complex personal blogs.

Vlepo allows you to setup your state-of-the-art blog within minutes

Here are steps you need to have your own blog setup:

### clone the code

```bash
git clone https://github.com/natelindev/vlepo.git
```

### install dependencies

```bash
yarn
```

after install you might need db migration and generation

```
yarn generate
yarn db:migrate
```

### setup environment variables

copy `env-example`, rename it to `.env`

fill in all the secrets

### run

at root directory

```bash
yarn dev
```

### deploy

To deploy this blog you need

- a vercel account
- a remote server that you can ssh to

#### frontend

first you need to install `vercel cli tool` by

```bash
npm i -g vercel
```

then you can

```bash
cd packages/vlepo-client
vercel
```

#### backend

you need to create a `hosts` file under `ansible-playbooks` folder with content

```
[web]
YOUR_SERVER_ADDRESS ansible_port=YOUR_SERVER_SSH_PORT ansible_ssh_private_key_file=PATH/TO/SSH_PRIVATE_KEY
```

then

```ts
yarn deploy
```

#### automatic deploy

With github actions, the deploy process can be automatic

fork the project and setup your own github actions.

### Customize

#### custom components

create your components under `packages/vlepo-client/src/components`, and make sure to import them to the `packages/vlepo-client/src/components/MDXComponents`,
now you will be able to use them in your MDX content.

#### custom theme

goto `packages/vlepo-client/src/shared/theme` and you will be able to edit all the themes,
you can even create your own theme.

### Technologies used

#### Frontend

- [React](https://github.com/facebook/react)
  - SSR support by [Next.js](https://github.com/vercel/next.js)
  - [MDX](https://mdxjs.com/) powered content supercharged markdown engine
  - 99% of components are hand-built using [Emotion](https://github.com/emotion-js/emotion) css-in-js
  - A number of hand-written custom hooks
  - Theme support for both dark and light and more
  - Animation by [react-spring](https://github.com/pmndrs/react-spring)
  - Responsive and utility style by [styled-system](https://github.com/styled-system/styled-system)
- [Relay](https://github.com/facebook/relay)
  - Super performant GraphQL data fetching & mutation
  - SSR & caching setup
  - Network layer setup
  - Full code-gen & typescript type-gen & GraphQL linting setup

#### Backend

- [Koa](https://github.com/koajs/koa)
  - Server itself is using raw [koa](https://github.com/koajs/koa) with custom middleware
- [GraphQL](https://graphql.org/)
  - The entire API is GraphQL based including auth & file upload using [graphql-nexus](https://github.com/graphql-nexus/nexus)
  - GraphQL playground available in development for ease API explore.
- [OAuth 2.0](https://tools.ietf.org/html/rfc6749)
  - Supports openid connect that connects with external OAuth providers by [grant](https://github.com/simov/grant)
  - Implemented spec-compliant OAuth2.0 authentication & authorization
- [PostgreSQL](https://www.postgresql.org/)
  - Designed entire complex relational DB schema with the help of [Prisma](https://github.com/prisma/prisma)

#### Shared

- [Typescript](https://www.typescriptlang.org/)
  - Entire code base is fully typed
  - Added many complex TypeHelpers & Function overloads
  - Interface merging setup to allow utmost type safety
  - Multiple tsconfig.json for mono-repo
- Adopted many functional programming techniques such as pattern matching
- Strict lint setup that includes
  - Eslint for all source linting
  - Import sort to automatically sort all imports
  - Package.json sort that automatically sort all dependencies and scripts
  - Spell checker that checks all source files to spot spelling errors
- Easy production deployment with [pm2](https://github.com/Unitech/pm2)
- Monorepo tool chain setup with [lerna](https://github.com/lerna/lerna), allowing ease of use at root level.
- [nvm](https://github.com/nvm-sh/nvm) support to allow easily switch between node.js versions.

### License

This repo's dependencies contains `next-mdx-remote`, which is licensed with `MPL 2.0`.

This project's sources itself is licensed under MIT.
