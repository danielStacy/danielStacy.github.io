# Daniel Stacy: (new) Homepage

[![CI](https://github.com/danielStacy/danielStacy.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/danielStacy/danielStacy.github.io/actions/workflows/ci.yml)

Source for my personal website. Hosts my resume, data analysis projects, and articles about them. Built with [Astro](https://astro.build/) as a static site and hosted on GitHub Pages.

Live at [danielstacy.github.io](https://danielstacy.github.io/).

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm), to install the Node version pinned in `.nvmrc`
- [pnpm](https://pnpm.io/)

```sh
nvm install
```

## Development tools

| Tool                                                                                                                                                              | Purpose                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [Prettier](https://prettier.io/) with [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)                                                 | Code formatting                                             |
| [ESLint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/) and [eslint-plugin-astro](https://ota-meshi.github.io/eslint-plugin-astro/) | Linting for JavaScript, TypeScript and Astro files          |
| [`@astrojs/check`](https://docs.astro.build/en/reference/cli-reference/#astro-check) with [TypeScript](https://www.typescriptlang.org/)                           | Type checking with `astro check`                            |
| [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged)                                                          | Runs ESLint and Prettier on staged files before each commit |

TypeScript is held at 6.0 until typescript-eslint and `@astrojs/check` support version 7.

## Deployment

The [CI workflow](.github/workflows/ci.yml) runs on every pull request and every push to `main`. It installs dependencies, lints, checks formatting and types, and builds the site. Pushes to `main` that pass are deployed to GitHub Pages.
