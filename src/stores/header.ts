import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeaderStore = defineStore('Header component', () => {
	const placeholder = ref('')
	const textList = ref([])
	const text = ref('')
	const login = ref(false)

	return {
		placeholder,
		textList,
		text,
		onClickGreen: null,
		login,
	}
})
