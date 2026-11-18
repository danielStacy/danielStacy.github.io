# CLAUDE.md

Personal website for Daniel Stacy: a resume, a portfolio of data analysis projects, and articles written from those projects. Built with Astro. This file is a living document; update it as decisions change.

## Purpose and audience

- Audience: recruiters (especially Australian public sector) and peers (LinkedIn etc.). Visitors should read, trust Daniel's expertise, and be able to hire him.
- The code and process are part of the portfolio. Keep the repository, commits, docs and tooling professional.
- Articles: data analysis on public Australian (and other) datasets. Some topics get two versions, a non-technical one and a technical one. Publishing cadence is about monthly. Start with zero or one test article.
- Use Australian English (`en-AU`) in all site copy, docs and comments. Set `lang="en-AU"` on the document.

## How to work with me (teaching mode)

Daniel is a CS graduate with solid JavaScript fundamentals (ES6+, async, DOM) and some React. He is using this project to learn professional tooling, so how things are done matters as much as the result.

- **Ask before architectural decisions.** Present 2-3 options with trade-offs and a recommendation, then wait.
- **Plan first.** Show a short plan before any change that touches multiple files.
- **Explanation depth:** when introducing a new tool or concept, give a short paragraph with an example. Give a thorough explanation with doc links only when asked. Daniel will say per task whether he wants "explain as you go" or "do it, then summarise".
- **Push back** on over-engineering, poor naming and skipped tests. Don't add features that aren't on the list below; the goal is a small, polished site, not a large one.
- **Never do these without asking:** add or upgrade dependencies, delete files, change the design system, modify article content, change config files, push to the remote.
- **Git:** never commit or push. Suggest the branch name and a Conventional Commits message (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`), and Daniel will commit.
- Article text: help edit only when asked. Flag articles that run long, since short and clear is the aim.

## Stack (confirmed 2026-11-17)

| Area | Choice | Why |
| --- | --- | --- |
| Framework | Astro, static output | Content site, minimal JS |
| Language | TypeScript, Astro's `strict` template, light annotations | Editor help and typed content schemas; `astro check` available |
| Package manager | pnpm | Strict dependency resolution, and lifecycle scripts from dependencies are off by default, in line with wanting something more minimal and secure |
| Styling | Plain CSS with custom properties (design tokens) plus Astro scoped styles | Standard, framework-free, easy to learn properly. No Tailwind |
| Articles | Markdown by default, MDX only for articles that need interactive pieces | Keeps most posts simple |
| Interactivity | Astro islands, only where needed; framework (React vs Svelte vs vanilla) undecided | Decide when the first interactive feature is real |
| Fonts | Self-hosted via Fontsource: Libre Caslon Text (headlines, body), IBM Plex Sans Variable (navigation, metadata), Playfair Display 800 (masthead wordmark only) | Performance and privacy, consistent with no tracking |
| Hosting | GitHub Pages, built and deployed by GitHub Actions, from a public repository | Free; may move elsewhere later |
| Node | Current LTS (26), managed with nvm, pinned in `.nvmrc` and `engines` | Reproducible |

Dependency policy: well-known, maintained libraries are fine, but ask before adding any (see above).

Data work (Python, pandas, Parquet, Tableau) happens outside this site. This repo consumes finished outputs: images, small JSON/CSV files, or embeds. Interactive charts, if added later, should be loaded only on the articles that use them.

## Features

**In scope:** Tags/categories, series (multi-part articles), reading time, footnotes, image optimisation (`astro:assets`), dark mode (follows system setting, plus a manual toggle that avoids a flash of the wrong theme), 404 page.

**Maybe later (don't build unprompted):** filter by category/date once there are many articles, interactive charts, custom domain, privacy-friendly analytics, RSS/sitemap, Open Graph cards, unit and end-to-end tests, newsletter.

**Not wanted:** comments, multi-author support, anything unnecessary.

### Pages

Home, Article, Tag/category pages, About, Contact, Projects, Résumé (CV), 404. Proposed main navigation: Articles, Projects, About, Résumé, Contact, with the masthead linking home.

Home page: short about-me section, one featured article, then the three most recent.

### Article frontmatter

`title`, `description`, `pubDate`, `tags`, `cover` (image) with `coverAlt`. Add `series` and `seriesOrder` when the first series exists. Define this as a typed content collection schema (Zod), and the build should fail on invalid frontmatter.

## Design

- Reference: The New York Times website: clean, minimal, editorial. Mood: modern editorial, minimal, serious/academic, with a little playfulness. Subtle motion only, and respect `prefers-reduced-motion`.
- Elements: masthead with the site name (Daniel Stacy), thin rules between sections, strong typographic hierarchy. Skip drop caps, date lines and multi-column front pages unless proposed and approved.
- Typography: Libre Caslon Text for headlines and article body, IBM Plex Sans for navigation and metadata, Playfair Display for the masthead wordmark. Caslon has only 400, 400 italic and 700, so don't use other weights or bold italic.
- Colour: black, off-white, and one or two subtle accents, defined as CSS custom properties with light and dark variants. Contrast must meet WCAG AA in both themes.
- Article body is a single readable column (about 60-75 characters per line).
- No logo yet; the masthead wordmark is the brand.
- Design polish is the top priority, followed by performance and accessibility, then learning the tools properly, then getting articles online.

## Quality targets

- Accessibility: WCAG 2.2 AA (a sensible target for an Australian public sector audience). Semantic HTML, keyboard navigation, visible focus, alt text for all images, tested with automated checks and manual keyboard passes.
- Lighthouse: 95+ in every category.
- Browsers: last 2 versions of evergreen browsers (Chrome, Edge, Firefox, Safari).
- No tracking, no cookie banner. Revisit with privacy-friendly analytics (Plausible, Umami) later.

## Tooling

Set up: ESLint, Prettier, EditorConfig, pre-commit hooks (Husky + lint-staged), and `astro check`. GitHub CLI (`gh`) for PRs, issues and the project board.

Testing is proportionate to a content site: the build must succeed and internal links must not be broken. Vitest and Playwright are maybe-later learning goals; suggest them when there is something worth testing.

CI/CD (GitHub Actions: install, lint, check, build, deploy to Pages) is an explicit learning goal, but Daniel wants to defer it until the site basics exist. Raise it again once the first pages build.

Environment: VS Code on Linux (Ubuntu, possibly moving to Debian). Avoid OS-specific commands where a portable one exists.

## Git workflow

- Feature branches and pull requests, even though this is a solo project. Use `main` as the protected, always-deployable branch.
- Branch names: `feat/...`, `fix/...`, `docs/...`, `chore/...`.
- Small, focused commits, using Conventional Commits.
- Repository is public (GitHub Pages needs a paid plan for private repositories, and the code is part of the portfolio).
- Use GitHub issues and a project board for planning where it helps.

## Code and documentation style

- Idiomatic code for each language (Astro, TypeScript, CSS). Clear names over clever ones.
- Avoid excessive comments. Comment the *why* where it isn't obvious, not the *what*.
- Keep `README.md` current (what the site is, how to run, build and deploy it).

## Project structure (intended)

```
src/
  pages/        # routes
  layouts/      # page shells (masthead, footer)
  components/   # reusable pieces
  content/      # articles (Markdown/MDX) and content schema
  styles/       # tokens, global styles
public/         # static assets
```

## Commands

Run `nvm use` first in a new terminal (or rely on `nvm alias default 26`).

| Command | What it does |
| --- | --- |
| `pnpm install` | Install dependencies from the lockfile |
| `pnpm dev` | Dev server at `http://localhost:4321` |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Serve the production build locally |

Add lint, format and check commands when that tooling is set up.

## Open questions

- Custom domain, and a budget for domain and hosting (research needed).
- Which UI framework, if any, for interactive pieces.
- Final colour palette.