import { Poke } from '@/util/poke'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeStore = defineStore('Poke', () => {
	const saveData = ref({})

	return {
		save(l: number, e: number, p: Poke) {
			saveData.value = {
				l,
				e,
				p,
			}
			// put todo
		},
	}
})
