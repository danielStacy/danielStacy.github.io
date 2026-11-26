# Decisions

Major decisions, newest first. When one changes, add a new entry and mark the old one as superseded.

## 2026-11-26: MIT licence for the code only

**Decision:** The code is under the MIT Licence, in `LICENCE`. The README excludes the articles, images and personal details, which stay all rights reserved.

**Why:** A public portfolio repository with no licence looks unfinished, and MIT is the most widely recognised permissive licence. The writing, portrait and resume are personal, so they stay under my control.

**Trade-offs:** Anyone can reuse the code without asking. Articles could later move to CC BY 4.0 so they can be shared with credit; a licence, once granted, can't easily be withdrawn, so starting restrictive is safer.

## 2026-11-23: Link previews from article covers and a site card

**Decision:** Every page has Open Graph tags, so shared links show a title, description and image. Articles use their cover, cropped to 1200 × 630 at build time. Other pages use one site card: the wordmark and tagline on paper, in `public/site-card.png`.

**Why:** Articles will be shared on LinkedIn, where a preview without an image is easy to scroll past. One card covers the other pages without extra dependencies.

**Trade-offs:** Covers must be PNG or JPEG, and previews crop their edges. The site card is a fixed image, so it needs remaking if the wordmark or tagline changes.

## 2026-11-22: Ink blue and ochre accents

**Decision:** Two accents on the black and off-white palette, chosen from five mockups. Ink blue marks things to follow: tag kickers, links in article text and the current page in the nav. Ochre only highlights data in charts.

**Why:** Blue reads as a link and suits a government and research audience. A separate chart colour keeps "click this" apart from "look at this", and blue and orange stay distinct for most kinds of colour blindness.

**Trade-offs:** Two colours to keep consistent, and each needs a lighter dark-mode version that passes WCAG AA.

## 2026-11-22: Projects link out instead of having their own pages

**Decision:** The Projects page is a list in which each project links to its article, code, dashboard and data. Projects are an array in `src/pages/projects.astro`, and the build fails if one names an article that doesn't exist.

**Why:** Most projects have an article, which already explains the work, so separate project pages would repeat it.

**Trade-offs:** A project with no article gets only a summary. If several end up like that, move projects into a content collection with their own pages.

## 2026-11-21: A small circular portrait beside the About heading

**Decision:** The About page shows a 96px black-and-white circular portrait just before its heading, chosen from seven mocked-up positions. It isn't used on the Resume page.

**Why:** A face builds trust with recruiters and peers, and a small byline-style photo stays editorial rather than profile-like. Australian CV conventions advise against photos on resumes.

**Trade-offs:** The About heading doesn't line up with the text's left edge like other pages' headings do.

## 2026-11-21: The article page, and configuring Astro's Markdown processor

**Decision:** Article text sits in a 40rem column, with the cover wider at 48rem. Footnotes appear under a "Notes" kicker, and a small plugin wraps tables in a box that scrolls sideways. `@astrojs/markdown-satteri` is listed as a dev dependency to configure these.

**Why:** Charts get room while lines stay readable. Wide data tables would otherwise overflow phones, and scrolling with CSS alone can stop screen readers treating a table as a table. Astro already uses Sätteri, so listing it adds nothing new.

**Trade-offs:** Its version must stay in step with Astro's. Each table is a tab stop, even when it fits.

## 2026-11-21: The theme toggle moves into the nav on phones

**Decision:** Below 36rem, the toggle fills the sixth cell of the nav grid, making a 3 × 2 grid, and its own row above the wordmark goes. Wider screens keep the toggle at the top right.

**Why:** The row cost about 32px of height on small screens, and the nav had an empty cell. The visible "Dark mode" label is kept, so the control is clear and voice control can name it.

**Trade-offs:** A setting sits among the links, though outside the link list. The toggle is rendered twice, once per layout, with one shown at a time. At 320px, its label only just fits its cell.

## 2026-11-20: Articles are a content collection, one folder each

**Decision:** Markdown articles in an Astro content collection, each a folder with its images, published at `/articles/<slug>/`. Tags come from a fixed list. The newest article is featured.

**Why:** Images stay beside their text, URLs stay short, and a tag typo fails the build instead of creating a duplicate tag.

**Trade-offs:** New tags need adding to the list. Slugs can't change without breaking links.

## 2026-11-20: Navigation splits into two rows on phones

**Decision:** Below 36rem, the nav links sit in two rows (three above two) with thin rules between them.

**Why:** They don't fit on one line. Two rows keep every link visible without JavaScript, unlike a scrolling strip or a menu button.

**Trade-offs:** A taller masthead on phones, and the split needs revisiting if links change.

## 2026-11-20: Keep a decision log

**Decision:** Record major decisions here. Smaller tweaks stay in commit messages.

**Why:** The repository is part of the portfolio, so its reasoning should be visible.

**Trade-offs:** One more file to keep current.

## 2026-11-19: Dark mode follows the system, with a toggle

**Decision:** Follow the system theme until the visitor uses the toggle, then remember their choice. Dark mode swaps ink and paper, grain included.

**Why:** The system setting is the least surprising default. An inline script applies a saved choice before first paint, so the wrong theme never flashes.

**Trade-offs:** The grain swap is written twice, for the system setting and for the toggle, and the two must match.

## 2026-11-19: Protect `main` and squash-merge pull requests

**Decision:** Changes reach `main` only through pull requests that pass CI, squash-merged with a Conventional Commits title.

**Why:** `main` deploys straight to the live site, so it must always build.

**Trade-offs:** Even one-line changes need a branch. Start each piece of work on a fresh branch.

## 2026-11-19: Host on GitHub Pages, deployed by GitHub Actions

**Decision:** One workflow checks and builds every pull request, and deploys `main`. The repository is named `danielStacy.github.io`, so the site is served from the root.

**Why:** Free, worth learning properly, and serving from the root avoids a `base` path on every link.

**Trade-offs:** Tied to GitHub for now.

## 2026-11-19: Lint, format and type-check, locally and in CI

**Decision:** Prettier, ESLint, EditorConfig and `astro check`, with a pre-commit hook for staged files.

**Why:** Consistent code and early warnings, using standard tools.

**Trade-offs:** TypeScript is held at 6.0, and `eslint-plugin-jsx-a11y` is left out, until they support the current tooling.

## 2026-11-17: Self-host three typefaces with Fontsource

**Decision:** Libre Caslon Text for text, IBM Plex Sans for navigation and metadata, and Playfair Display for the wordmark.

**Why:** An editorial look, with no requests to third parties.

**Trade-offs:** Caslon has only 400, 400 italic and 700. Three typefaces add page weight.

## 2026-11-17: A broadsheet layout with paper grain

**Decision:** A newspaper-style layout with a subtle paper grain, chosen from three mockups.

**Why:** It suits a site about reading data carefully: serious, with a little character.

**Trade-offs:** The textured wordmark falls back to plain ink in high-contrast modes and print.

## 2026-11-17: Plain CSS with design tokens

**Decision:** Plain CSS with custom properties and Astro's scoped styles. No CSS framework.

**Why:** Standard and worth learning properly.

**Trade-offs:** Common patterns are written by hand.

## 2026-11-17: pnpm, and Node managed with nvm

**Decision:** pnpm for packages, and the current Node LTS pinned with nvm.

**Why:** Strict, more secure installs, and the same versions locally and in CI.

**Trade-offs:** Only direct dependencies can be imported.

## 2026-11-17: Astro with TypeScript, building a static site

**Decision:** Astro with static output and strict TypeScript.

**Why:** A content site needs little JavaScript, and typed schemas catch frontmatter mistakes.

**Trade-offs:** The framework for interactive pieces is still undecided.
