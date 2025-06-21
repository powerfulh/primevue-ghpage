import CommonModal from './components/CommonModal.vue'

// https://github.com/vuejs/language-tools/issues/4503
declare module 'vue' {
	export interface GlobalComponents {
		CM: typeof CommonModal
	}
}
