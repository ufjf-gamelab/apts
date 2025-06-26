# Quati: automatic play testing

This is **Quati**, an automatic play-testing system.
It is intended to offer an interface for representing various types of games and to generate artificial intelligence (AI) agents to play them.

## Dependencies

This project is written in Typescript, and runs on Node.js.
To install the project, you must have the following dependencies installed:

- [pnpm](https://pnpm.io/)
- [Node.js](https://nodejs.org/)

`Pnpm` can be installed with the following command:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

We recommend using `pnpm` to install `Node.js`, which can be done as follows:

```bash
pnpm env use --global lts
```

### Optional Dependencies

If you use the `Visual Studio Code` editor, we recommend installing the following extensions:

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Brazilian Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese-brazilian)
- [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)

## What's inside?

This monorepo includes the following packages and apps:

### Apps and Packages

- `node`: an environment for running the automatic play-testing system using [Node.js](https://nodejs.org)
- `web`: a [React](https://reactjs.org) with [vite](https://vitejs.dev) TypesCript app
- `@repo/focinho`: a functionality library shared by both `node` and `web` applications
- `@repo/eslint_config`: shared `eslint` configurations
- `@repo/typescript_config`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This monorepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Installing

To install the project, run the following command:

```bash
pnpm i
```

## Running

You can run the project in different modes:

### Development

To run the project in development mode, use the following command:

```bash
pnpm run dev
```

You can run only the `node` or `web` apps with the following commands:

```bash
pnpm run dev --filter=node
pnpm run dev --filter=web
```

### Building

To build the project, use the following command:

```bash
pnpm run build
```

You can also build only the `node` or `web` apps with the `--filter` flag:

```bash
pnpm run build --filter=node
pnpm run build --filter=web
```

### Previewing

To preview the `node` app, use the `preview` script.
You can pass the arguments at the end of the command.

```bash
pnpm run preview <args>
```
