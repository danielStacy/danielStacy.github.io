# Adding an article

Articles are Markdown files in `src/content/articles/`, one folder per article. Publishing one is a normal pull request: when it merges, the site deploys.

## Steps

1. **Start a branch**, named for the article:

   ```sh
   git switch main && git pull
   git switch -c feat/article-renters-census
   ```

2. **Create the article's folder** in `src/content/articles/`. The folder name is the article's slug, which becomes its URL (`/articles/renters-census/`). Renaming after publishing will cause links to the article will break.

3. **Copy the template** into the folder as `index.md`:

   ```sh
   cp docs/article-template.md src/content/articles/renters-census/index.md
   ```

4. **Add the images** to the same folder: the cover, plus any charts exported from the analysis. Keep working files, such as a GIMP `.xcf`, in `design/covers/` and export a PNG or JPEG here.

5. **Fill in the frontmatter** (see [Frontmatter](#frontmatter)) and **write the article** in Markdown.

6. **Preview it** with `pnpm dev` at `http://localhost:4321/articles/<slug>/`, then **check it** with `pnpm build`, which fails if the frontmatter is invalid or an image is missing.

7. **Commit** with a message like `feat: add article on renters in the Census`, then push and open a pull request. Squash-merge it once CI passes.

8. **Check the link preview** once the site has deployed, by pasting the article's URL into [LinkedIn's Post Inspector](https://www.linkedin.com/post-inspector/). It shows the title and cropped cover that a shared link will display, and refreshes LinkedIn's cached copy.

The newest article is featured on the home page automatically.

## Frontmatter

The frontmatter is the block between the `---` lines at the top of `index.md`. The schema in `src/content.config.ts` checks it on every build. All fields are required.

| Field         | What to write                                                                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | The headline, in sentence case                                                                                                                                                                                                                                                  |
| `description` | One or two sentences, shown in article lists and search results                                                                                                                                                                                                                 |
| `pubDate`     | The publication date, as `YYYY-MM-DD`                                                                                                                                                                                                                                           |
| `tags`        | At least one tag key from the [tag list](#tags)                                                                                                                                                                                                                                 |
| `cover`       | The cover image's path, relative to `index.md`, for example `./cover.png`. Use PNG (charts) or JPEG (photos), 16:9 and at least 1600 × 900, with metadata stripped. Link previews crop it to 1200 × 630 from the centre, so keep the subject away from the top and bottom edges |
| `coverAlt`    | Alt text for what the cover image shows. Required for every cover                                                                                                                                                                                                               |

If a field is missing or wrong, the build stops and names the article and the field.

## Writing in Markdown

Articles use standard Markdown, plus GitHub's extensions for tables and footnotes.

- **Headings:** start sections at `##`. The title is the page's only `#` heading.
- **Images:** `![Alt text](./figure-1.png)`. Keep images in the article's folder. Astro resizes and compresses them at build time. Write alt text that gives the chart's takeaway, not just its type.
- **Footnotes:** `[^1]` in the text, and `[^1]: Footnote text.` at the end of the article. They're listed under "Notes" at the end of the page.
- **Tables:** GitHub-style pipe tables. Right-align number columns with `---:`. Wide tables scroll sideways on small screens.

## Tags

The allowed tags are listed in `src/content/tags.ts`:

```ts
export const tags = {
	census: 'Census',
	employment: 'Employment',
	housing: 'Housing',
	methods: 'Methods',
} as const;
```

The key on the left is what you write in frontmatter and what appears in the tag's URL. Use lowercase words separated by hyphens. The label on the right is what readers see.
