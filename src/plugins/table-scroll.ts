import type { SatteriProcessorOptions } from '@astrojs/markdown-satteri';

type HastPlugin = NonNullable<SatteriProcessorOptions['hastPlugins']>[number];

/**
 * Wraps each Markdown table in a box that scrolls sideways, so a wide table doesn't overflow a phone
 * screen. The box is focusable so keyboard users can scroll it, which means it also needs a role
 * and a name for screen readers to announce.
 */
export const tableScroll = {
	name: 'table-scroll',
	element: {
		filter: ['table'],
		visit(node, ctx) {
			ctx.wrapNode(node, {
				type: 'element',
				tagName: 'div',
				properties: {
					className: ['table-scroll'],
					tabIndex: 0,
					role: 'region',
					ariaLabel: 'Table',
				},
				children: [],
			});
		},
	},
} satisfies HastPlugin;
