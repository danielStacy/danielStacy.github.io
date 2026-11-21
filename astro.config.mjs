// @ts-check
import { satteri } from '@astrojs/markdown-satteri';
import { defineConfig } from 'astro/config';
import { tableScroll } from './src/plugins/table-scroll';

// https://astro.build/config
export default defineConfig({
	site: 'https://danielstacy.github.io',
	markdown: {
		processor: satteri({
			hastPlugins: [tableScroll],
			features: {
				gfm: {
					footnotes: {
						label: 'Notes',
						// The text variation selector stops iOS drawing the back arrow as an emoji.
						backContent: '↩︎',
					},
				},
			},
		}),
	},
});
