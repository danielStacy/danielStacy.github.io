import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { tags, type Tag } from './content/tags';

// z.enum needs a non-empty tuple, which Object.keys can't promise to TypeScript.
const tagKeys = Object.keys(tags) as [Tag, ...Tag[]];

// Each article is a folder, so its images sit beside it; the folder name becomes the URL slug.
const articles = defineCollection({
	loader: glob({ pattern: '*/index.md', base: './src/content/articles' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(1),
			description: z.string().min(1),
			pubDate: z.coerce.date(),
			tags: z.array(z.enum(tagKeys)).min(1),
			cover: image(),
			coverAlt: z.string().min(1),
		}),
});

export const collections = { articles };
