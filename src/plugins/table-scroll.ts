import type { SatteriProcessorOptions } from '@astrojs/markdown-satteri';

type HastPlugin = NonNullable<SatteriProcessorOptions['hastPlugins']>[number];

/**
 * Wraps each Markdown table in a box that scrolls sideways, so a wide table doesn't overflow a phone
 * screen. The box is focusable so keyboard users can scroll it, which means it also needs a role
 * and a name for screen readers to announce. Names are numbered so each is unique on the page.
 *
 * Sätteri calls this factory once per document, so the count starts again for each article.
 */
export const tableScroll = (() => {
	let count = 0;

	return {
		name: 'table-scroll',
		element: {
			filter: ['table'],
			visit(node, ctx) {
				count += 1;
				ctx.wrapNode(node, {
					type: 'element',
					tagName: 'div',
					properties: {
						className: ['table-scroll'],
						tabIndex: 0,
						role: 'region',
						ariaLabel: `Table ${count}`,
					},
					children: [],
				});
			},
		},
	};
}) satisfies HastPlugin;
