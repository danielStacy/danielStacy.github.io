# Tools

What each tool in this project does and where it's configured. For why each one was chosen, see [decisions.md](decisions.md).

## Runtime and packages

| Tool                                 | What it does                                       | Configured in                                        | Used through   |
| ------------------------------------ | -------------------------------------------------- | ---------------------------------------------------- | -------------- |
| [Node.js](https://nodejs.org/)       | Runs the build and all tooling                     | `.nvmrc`, and `engines` in `package.json`            | —              |
| [nvm](https://github.com/nvm-sh/nvm) | Installs and switches to the pinned Node version   | `.nvmrc`                                             | `nvm use`      |
| [pnpm](https://pnpm.io/)             | Installs dependencies exactly as the lockfile says | `packageManager` in `package.json`, `pnpm-lock.yaml` | `pnpm install` |

## Site

| Tool                                                                                          | What it does                                                                                                                 | Configured in                                    | Used through                             |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| [Astro](https://astro.build/)                                                                 | Builds the static site from `.astro` components and Markdown                                                                 | `astro.config.mjs`                               | `pnpm dev`, `pnpm build`, `pnpm preview` |
| [TypeScript](https://www.typescriptlang.org/)                                                 | Types for components, scripts and content                                                                                    | `tsconfig.json`, extending Astro's strict preset | `pnpm check`                             |
| [Fontsource](https://fontsource.org/)                                                         | Self-hosted font files, installed as packages                                                                                | Imports in `src/layouts/BaseLayout.astro`        | —                                        |
| [Sätteri](https://docs.astro.build/en/guides/markdown-content/) (`@astrojs/markdown-satteri`) | Astro's Markdown processor. Listed so its options and plugins can be configured, such as the table wrapper in `src/plugins/` | `markdown.processor` in `astro.config.mjs`       | `pnpm build`                             |

## Code quality

| Tool                                                                                                                                                              | What it does                                                    | Configured in                                            | Used through                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------- |
| [Prettier](https://prettier.io/) with [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)                                                 | Formats code and Markdown                                       | `.prettierrc`, `.prettierignore`                         | `pnpm format`, `pnpm format:check` |
| [ESLint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/) and [eslint-plugin-astro](https://ota-meshi.github.io/eslint-plugin-astro/) | Finds likely mistakes in JavaScript, TypeScript and Astro files | `eslint.config.js`                                       | `pnpm lint`                        |
| [`astro check`](https://docs.astro.build/en/reference/cli-reference/#astro-check) (`@astrojs/check`)                                                              | Type-checks `.astro` and `.ts` files                            | `tsconfig.json`                                          | `pnpm check`                       |
| [EditorConfig](https://editorconfig.org/)                                                                                                                         | Sets indentation, line endings and final newlines in any editor | `.editorconfig`                                          | Editors; Prettier also reads it    |
| [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged)                                                          | Runs ESLint and Prettier on staged files before each commit     | `.husky/pre-commit`, and `lint-staged` in `package.json` | `git commit`                       |

TypeScript is held at 6.0 until typescript-eslint and `@astrojs/check` support version 7.

The pre-commit hook runs `pnpm`, so it needs Node on the `PATH`. If committing from an editor fails with `pnpm: command not found`, create `~/.config/husky/init.sh` containing `. ~/.nvm/nvm.sh`.

## CI/CD and GitHub

| Tool                                                                                                                     | What it does                                                                | Configured in                         | Used through                     |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------- | -------------------------------- |
| [GitHub Actions](https://docs.github.com/en/actions)                                                                     | Lints, checks and builds every pull request; deploys `main` to GitHub Pages | `.github/workflows/ci.yml`            | Runs on pull requests and pushes |
| [GitHub Pages](https://docs.github.com/en/pages)                                                                         | Hosts the built site at `https://danielstacy.github.io/`                    | Repository settings (source: Actions) | The deploy job                   |
| [Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets) | Protect `main`: pull request and passing CI required, no force pushes       | Repository settings ("Protect main")  | Every merge                      |
| [GitHub CLI](https://cli.github.com/)                                                                                    | Pull requests, checks and issues from the terminal                          | —                                     | `gh pr create`, `gh pr checks`   |

## Editor

| Tool                                                             | What it does                                                                       | Configured in             |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------- |
| [VS Code](https://code.visualstudio.com/) recommended extensions | Astro language support, inline lint warnings, Prettier formatting and EditorConfig | `.vscode/extensions.json` |
