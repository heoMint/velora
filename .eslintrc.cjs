module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['react-app', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/jsx-uses-react': 0,
		'prettier/prettier': ['error', { endOfLine: 'auto' }], // Updated line
	},
};
