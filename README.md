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

## Documentation

- [Tools](docs/tools.md): what each tool does and where it's configured
- [Decisions](docs/decisions.md): why the site is built the way it is

## Deployment

The [CI workflow](.github/workflows/ci.yml) runs on every pull request and every push to `main`. It installs dependencies, lints, checks formatting and types, and builds the site. Pushes to `main` that pass are deployed to GitHub Pages.
