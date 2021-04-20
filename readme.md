## My unnecessarily complex personal blog

Data has shown that 99% of use cases for all developer tooling are building unnecessarily complex personal blogs.

Here's the one of them to show off technologies I learned.

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
  - Designed entire complex relational DB schema with the help of [Prisma](https://github.com/prisma/prisma) and [knex](https://github.com/knex/knex)

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
