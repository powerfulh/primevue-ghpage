import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,mjs,jsx,vue}'],
	},

	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

	{
		languageOptions: {
			globals: {
				...globals.browser,
				globalMode: true // custom
			},
		},
		rules: { // custom
			'vue/multi-word-component-names': [
				'error',
				{
					ignores: ['Index']
				}
			]
		},
		plugins: ['@typescript-eslint'] // custom
	},

	js.configs.recommended,
	...pluginVue.configs['flat/essential'],
])
