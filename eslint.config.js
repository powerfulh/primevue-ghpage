import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueConfigPrettier from '@vue/eslint-config-prettier'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,mjs,jsx,vue,ts}'], // custom (Add ts)
	},

	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

	{
		languageOptions: {
			globals: {
				...globals.browser,
				globalMode: true, // custom
			},
			parser: vueParser, // custom
			parserOptions: {
				// custom
				parser: tsParser,
			},
		},
		rules: {
			// custom
			'vue/multi-word-component-names': [
				'error',
				{
					ignores: ['Index'],
				},
			],
			'prettier/prettier': [
				'warn',
				{
					useTabs: true,
					tabWidth: 4,
					endOfLine: 'auto',
					singleQuote: true,
					semi: false,
					arrowParens: 'avoid',
					printWidth: 160,
				},
			],
		},
	},

	js.configs.recommended,
	...pluginVue.configs['flat/essential'],
	vueConfigPrettier, // custom
])
