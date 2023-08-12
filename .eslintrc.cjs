module.exports = {
	root: true,
	plugins: ['prettier', 'tailwindcss'],
	extends: ['eslint:recommended', 'plugin:tailwindcss/recommended', 'prettier'],
	rules: {
		'prettier/prettier': ['warn', { endOfLine: 'auto' }],
		'no-unused-vars': 'warn',
		'tailwindcss/no-custom-classname': 'off'
	},
	overrides: [
		{
			files: ['*.cjs'],
			env: {
				node: true
			}
		},
		{
			files: ['*.mjs', '*.js'],
			env: {
				node: true
			},
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: '2022'
			}
		},
		{
			files: ['*.astro'],
			extends: ['plugin:astro/recommended'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module'
			},
			env: { browser: true, node: false, es6: true },
			rules: {
				// Enable recommended rules
				'astro/no-conflict-set-directives': 'error',
				'astro/no-unused-define-vars-in-style': 'error',

				// override/add rules settings here, such as:
				'astro/no-set-html-directive': 'error'
			}
		},
		{
			files: ['*.svelte'],
			extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.svelte']
			},
			env: { browser: true, node: false, es6: true }
		}
	]
}
