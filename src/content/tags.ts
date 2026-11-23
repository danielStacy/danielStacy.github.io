// The only tags articles may use. Keys go in frontmatter and URLs; values are shown on the page.
export const tags = {
	census: 'Census',
	employment: 'Employment',
	housing: 'Housing',
	methods: 'Methods',
} as const;

export type Tag = keyof typeof tags;

/** The labels for some tag keys, ready to show, for example "Housing, Census". */
export const tagLabels = (keys: readonly Tag[]) => keys.map((key) => tags[key]).join(', ');
