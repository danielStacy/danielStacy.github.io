/**
 * Formats a date the Australian way, for example "20 November 2026". Frontmatter dates are
 * midnight UTC, so formatting in UTC keeps the day the same whatever time zone builds the site.
 */
export const formatDate = (date: Date) =>
	date.toLocaleDateString('en-AU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});

/** The date as YYYY-MM-DD, for a <time> element's datetime attribute. */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
