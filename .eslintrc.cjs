// .eslintrc.js or .eslintrc.json
module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', '@typescript-eslint', 'import'],
	settings: {
		react: {
			version: '18.2', // Specify the React version (e.g., '16.8' or '17.0')
		},
	},
	rules: {
		// Other ESLint rules can go here

		// Import order rule
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'], // React and external libraries
					['internal'], // Your imports with @ notation
					['parent', 'sibling'], // Local components
					['index'], // Index files
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',

		// Tab width
		indent: ['error', 2, { SwitchCase: 1 }],

		// Semicolons
		semi: ['error', 'never'],

		// Use tabs
		'no-tabs': 'off', // To allow using tabs
		indent: [
			'error',
			2,
			{ SwitchCase: 1, ignoredNodes: ['TemplateLiteral > *'] },
		],
	},
}
