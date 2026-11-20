# Decisions

Why the site is built the way it is, newest first. Each entry records what was decided, why, and what it costs. When a decision changes, add a new entry and mark the old one as superseded, rather than editing history.

## 2026-11-20: Keep a decision log

**Decision:** Record major decisions in this file, newest first. This reverses an earlier choice not to keep one.

**Why:** The repository is part of the portfolio, so the reasoning behind it should be visible, not just the result. A single file is easy to read top to bottom.

**Trade-offs:** One more file to keep current. Smaller design tweaks, such as grain strength, stay in the commit history.

## 2026-11-19: Dark mode follows the system, with a toggle

**Decision:** Follow the operating system's theme until the visitor chooses one with the toggle, then remember the choice in `localStorage`. Dark mode swaps ink and paper, grain included.

**Why:** Respecting the system setting is the least surprising default, and the toggle covers people who want something different for this site only.

**How:**

- Colours are written once with `light-dark()` and resolved by `color-scheme`. Grain textures are images, which `light-dark()` doesn't accept, so they swap through selectors.
- A small inline script in `<head>` applies a saved choice before first paint, so the wrong theme never flashes.
- The toggle is a `<button>` with `aria-pressed`. It stays hidden without JavaScript, when the site still follows the system through CSS.
- Theme changes cross-fade over 200 ms using the View Transitions API, which also fades the grain. The fade is skipped when reduced motion is requested or the API is unsupported.

**Trade-offs:** The grain swap rules repeat the dark-mode condition, once for the system setting and once for the toggle, and the two must stay in step.

## 2026-11-19: Protect `main` and squash-merge pull requests

**Decision:** Every change reaches `main` through a pull request. A GitHub ruleset requires the CI check to pass and blocks direct pushes, force pushes and deletion, with no bypass list. Pull requests are squash-merged with a Conventional Commits title.

**Why:** `main` deploys straight to the live site, so it must always build. Squash merging gives one clean commit per change.

**Trade-offs:** Even one-line changes need a branch and a PR. After a squash merge, the old branch's commits no longer match `main`, so new work should start on a fresh branch.

## 2026-11-19: Host on GitHub Pages, deployed by GitHub Actions

**Decision:** One workflow lints, checks formatting and types, and builds on every pull request and push to `main`. Pushes to `main` that pass then deploy to GitHub Pages. The repository is named `danielStacy.github.io`, so the site is served from the root.

**Why:** Free hosting for a static site, and a CI/CD setup that is worth learning properly. Serving from the root avoids a `base` path, which would otherwise need adding to every internal link. The repository is public because Pages needs a paid plan for private repositories, and the code is part of the portfolio anyway.

**Trade-offs:** Tied to GitHub for now. A custom domain is a possible later step.

## 2026-11-19: Lint, format and type-check, locally and in CI

**Decision:** Prettier (with its Astro plugin), ESLint (recommended rules from ESLint, typescript-eslint and eslint-plugin-astro), EditorConfig and `astro check`. Husky and lint-staged run ESLint and Prettier on staged files before each commit. CI runs the full checks.

**Why:** Consistent code without having to think about it, problems caught before review, and standard tools that are worth knowing.

**Trade-offs:**

- TypeScript is held at 6.0 until typescript-eslint and `@astrojs/check` support version 7.
- `eslint-plugin-jsx-a11y` is left out because it doesn't support ESLint 10 yet. Accessibility is better tested on the built pages anyway.
- Prettier also formats Markdown, which normalises some syntax (for example, `*emphasis*` becomes `_emphasis_`).

## 2026-11-17: Self-host three typefaces with Fontsource

**Decision:** Libre Caslon Text for headlines and body, IBM Plex Sans (variable) for navigation and metadata, and Playfair Display 800 for the masthead wordmark only. They are installed as Fontsource packages, and the two fonts visible on first paint are preloaded.

**Why:** A classic serif for editorial reading, a clean sans for interface text, and a high-contrast display face for the wordmark. Self-hosting avoids requests to third parties, consistent with the site's no-tracking stance, and avoids the extra connection.

**Trade-offs:** Caslon comes only in 400, 400 italic and 700, so no other weights and no bold italic. Three typefaces add page weight, which preloading only partly offsets.

## 2026-11-17: A broadsheet layout with paper grain

**Decision:** A layout inspired by newspaper front pages, chosen from three mockups. It has a centred wordmark, navigation between rules, a featured article, and three recent articles in ruled columns. A subtle SVG noise texture gives the page and the wordmark a paper-like grain.

**Why:** It suits a site about reading data carefully: editorial, serious, with a little character.

**Trade-offs:** The wordmark's texture is clipped to the text, so it falls back to a plain colour in forced-colours mode, high-contrast mode and print, where textured text would hurt legibility.

## 2026-11-17: Plain CSS with design tokens

**Decision:** Plain CSS, with custom properties for colours, fonts and layout, plus Astro's scoped component styles. No Tailwind or other CSS framework.

**Why:** Standard, framework-free and worth learning properly. Scoped styles keep each component's CSS next to its markup.

**Trade-offs:** No ready-made utility classes, so common patterns are written by hand.

## 2026-11-17: pnpm, and Node managed with nvm

**Decision:** pnpm as the package manager, pinned through `packageManager` in `package.json`. Node is the current LTS (26), managed with nvm and pinned in `.nvmrc` and `engines`.

**Why:** pnpm resolves dependencies strictly, and dependencies can't run install scripts by default, which suits wanting the project minimal and secure. Pinning versions keeps local machines and CI identical.

**Trade-offs:** Strict resolution means a package can only be imported if it's a direct dependency.

## 2026-11-17: Astro with TypeScript, building a static site

**Decision:** Astro with static output, using its strict TypeScript preset.

**Why:** A content site needs very little JavaScript, and Astro ships none by default, adding interactive islands only where needed. TypeScript gives editor help and typed content schemas, so invalid article frontmatter fails the build.

**Trade-offs:** A UI framework for interactive pieces (React, Svelte or plain JavaScript) is still undecided, and will be chosen when the first interactive feature is real.
