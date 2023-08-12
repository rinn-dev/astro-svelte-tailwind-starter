module.exports = {
	// Lint & Prettify TS and JS files
	'src/**/*.(ts|tsx|js|astro|svelte)': () => [`pnpm format`, `pnpm lint`],

	// Prettify only Markdown and JSON files
	'src/**/*.(md|json)': `pnpm prettier --write --ignore-unknown`
}
