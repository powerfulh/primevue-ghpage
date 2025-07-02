import { Poke } from '@/util/poke'
import { defineStore } from 'pinia'
import { computed, Ref, ref } from 'vue'

export const usePokeStore = defineStore('Poke', () => {
	const saveData = ref({ p: null, l: 0, e: 0 })

	const loadable = computed(() => saveData.value.p)

	return {
		loadable,
		save(l: number, e: number, p: Poke) {
			saveData.value = {
				l,
				e,
				p,
			}
			// put todo
		},
		load(l: Ref<number>, e: Ref<number>, p: Ref<Poke>) {
			l.value = saveData.value.l
			e.value = saveData.value.e
			p.value = saveData.value.p
		},
	}
})
