# Daniel Stacy

[![CI](https://github.com/danielStacy/danielStacy.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/danielStacy/danielStacy.github.io/actions/workflows/ci.yml)

Source for my personal website. Hosts my resume, data analysis projects, and articles about them. Built with [Astro](https://astro.build/) as a static site and hosted on GitHub Pages.

Live at [danielstacy.github.io](https://danielstacy.github.io/).

## Running locally

Needs [nvm](https://github.com/nvm-sh/nvm) and [pnpm](https://pnpm.io/).

```sh
nvm install    # installs and uses the Node version in .nvmrc
pnpm install   # installs dependencies and the pre-commit hook
pnpm dev       # serves the site at http://localhost:4321
```

`pnpm build` builds the site into `dist/`, and `pnpm preview` serves that build.

## Documentation

- [Tools](docs/tools.md): what each tool does and where it's configured
- [Decisions](docs/decisions.md): why the site is built the way it is
- [Adding an article](docs/adding-an-article.md): how to write and publish an article, and manage tags

## Deployment

The [CI workflow](.github/workflows/ci.yml) runs on every pull request and every push to `main`. It installs dependencies, lints, checks formatting and types, and builds the site. Pushes to `main` that pass are deployed to GitHub Pages.

## Licence

The code is available under the [MIT Licence](LICENCE). The articles, images and personal details, such as the portrait and resume, are not covered by it: they are © Daniel Stacy, all rights reserved.
